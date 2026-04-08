// imports principais
import { UserModel } from "../models/UserModel.js";
import { InvitationModel } from "../models/InvitationModel.js";
import bcrypt from "bcrypt";
import * as z from "zod";

// Middlewares
import { createUserToken } from "../helpers/create-user-token.js";
import { getToken } from "../helpers/get-token.js";
import { getUserByToken } from "../helpers/get-user-by-token.js";

// Schema Zod para SignUp
const SignUpSchema = z
  .object({
    name: z.string().trim().nonempty(),
    nickname: z.string().trim().nonempty(),
    email: z.email().trim(),
    password: z.string().trim().min(6).max(120),
    confirmPassword: z.string().trim().min(6).max(120),
    invitation: z.string().trim().nonempty(),
  })
  .refine((data) => data.password === data.confirmPassword);

// Schema Zod para SignIn
const SignInSchema = z.object({
  email: z.email().trim(),
  password: z.string().min(6),
});

class UserController {
  static async signUp(input: any) {
    const { name, nickname, email, password, confirmPassword, invitation } =
      SignUpSchema.parse(input);

    if (!name) throw new Error("O nome é obrigatório!");

    if (!email) throw new Error("O email é obrigatório!");

    if (!password) throw new Error("A senha é obrigatória!");

    if (!confirmPassword)
      throw new Error("A confirmação da senha é obrigatória!");

    if (password !== confirmPassword)
      throw new Error("As senhas precisam ser iguais!");

    if (!invitation) throw new Error("O código de convite é obrigatório!");

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const userExist = await UserModel.findOne({ email: email });

    if (userExist) {
      throw new Error("Email já cadastrado!");
    }

    try {
      const invitationDoc = await InvitationModel.findOneAndUpdate(
        {
          code: invitation,
          used: false,
        },
        {
          used: true,
        },
        { new: true },
      );

      if (!invitationDoc) {
        throw new Error("Convite inválido ou já utilizado!");
      }

      const user = new UserModel({
        accountType: "user",
        profilePicture: "",
        name: name,
        nickname: nickname,
        email: email,
        password: passwordHash,
      });

      const newUser = await user.save();

      await InvitationModel.updateOne(
        { _id: invitationDoc._id },
        { usedBy: newUser._id.toString() },
      );

      const token = createUserToken(newUser);

      return {
        user: {
          id: newUser._id.toString(),
          name: newUser.name,
          nickname: newUser.nickname,
          email: newUser.email,
          attributes: {
            fans: newUser.attributes?.fans ?? 0,
            cool: newUser.attributes?.cool ?? 0,
            sexy: newUser.attributes?.sexy ?? 0,
            trustworthy: newUser.attributes?.trustworthy ?? 0,
          },
        },
        token,
      };
    } catch (error: any) {
      console.error("Erro ao tentar criar usuário!", error);
      throw new Error("Erro ao tentar criar usuário!");
    }
  }

  static async signIn(input: any) {
    // 1. Sanitização e Validação em um passo só
    const { email, password } = SignInSchema.parse(input);

    if (!email) throw new Error("O email é obrigatório!");

    if (!password) throw new Error("A senha é obrigatória!");

    // Agora você tem CERTEZA que email e password são strings.
    //// Procura o usuário pelo email
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const passwordHash = user.password;

    // `user.password` é o hash armazenado
    const verifyPassword = await bcrypt.compare(password, passwordHash);

    if (!verifyPassword) {
      throw new Error("Senha incorreta!");
    }

    try {
      const token = createUserToken(user);

      return {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          token, // opcional: alguns projetos preferem o token separado, mas você definiu dentro do User
        },
        token, // token separado também, para o schema AuthPayload
      };
    } catch (error) {
      // você pode lançar novamente para GraphQL capturar ou logar o erro
      console.error("Erro ao logar usuário:", error);
      throw new Error("Erro ao logar usuário");
    }
  }

  static async checkUser(context: any) {
    const token = getToken(context.request);
    if (!token) throw new Error("Acesso negado!");

    const user = await getUserByToken(token);
    if (!user) throw new Error("Usuário não encontrado!");

    return {
      id: user._id.toString(),
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      attributes: {
        fans: user.attributes?.fans ?? 0,
        cool: user.attributes?.cool ?? 0,
        sexy: user.attributes?.sexy ?? 0,
        reliable: user.attributes?.reliable ?? 0,
      },
    };
  }

  static async searchUsers(search: string) {
    if (!search || search.trim() === "") {
      return [];
    }

    const users = await UserModel.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { nickname: { $regex: search, $options: "i" } },
      ],
    }).lean();

    return users.map((user) => ({
      ...user,
      id: user._id.toString(),
    }));
  }

  static async getUserById(id: string) {
    const user = await UserModel.findById(id).lean();

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    return {
      ...user,
      id: user._id.toString(),
    };
  }
}
export default UserController;
