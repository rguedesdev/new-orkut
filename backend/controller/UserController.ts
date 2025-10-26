// imports principais
import bcrypt from "bcrypt";
import { UserModel } from "../models/UserModel.js";

// Middlewares
import { createUserToken } from "../helpers/create-user-token.js";
import { getToken } from "../helpers/get-token.js";
import { getUserByToken } from "../helpers/get-user-by-token.js";

class UserController {
  static async signUp({
    name,
    nickname,
    email,
    password,
    confirmPassword,
  }: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    if (!name) throw new Error("O nome é obrigatório!");
    if (!email) throw new Error("O email é obrigatório!");
    if (!password) throw new Error("A senha é obrigatória!");
    if (!confirmPassword)
      throw new Error("A confirmação da senha é obrigatória!");
    if (password !== confirmPassword)
      throw new Error("As senhas precisam ser iguais!");

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const userExist = await UserModel.findOne({ email: email });

    if (userExist) {
      throw new Error("Email já cadastrado!");
    }

    try {
      const user = new UserModel({
        profilePicture: "",
        name: name,
        nickname: nickname,
        email: email,
        password: passwordHash,
      });

      const newUser = await user.save();

      const token = createUserToken(newUser);

      return {
        id: newUser._id.toString(),
        name: newUser.name,
        nickname: newUser.nickname,
        email: newUser.email,
        token,
      };
    } catch (error) {
      // você pode lançar novamente para GraphQL capturar ou logar o erro
      console.error("Erro ao criar usuário:", error);
      throw new Error("Erro ao criar usuário");
    }
  }

  static async signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    if (!email) throw new Error("O email é obrigatório!");

    if (!password) throw new Error("A senha é obrigatória!");

    // Procura o usuário pelo email
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
}
export default UserController;
