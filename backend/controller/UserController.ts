// imports principais
import bcrypt from "bcrypt";
import { UserModel } from "../models/UserModel.js";

// Middlewares
import { createUserToken } from "../helpers/create-user-token.js";

class UserController {
  static async signUp({
    name,
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
        name: name,
        email: email,
        password: passwordHash,
      });

      const newUser = await user.save();

      const token = createUserToken(newUser);

      return {
        id: newUser._id.toString(),
        name: newUser.name,
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
    console.log("Login realizado com sucesso!");
  }
}
export default UserController;
