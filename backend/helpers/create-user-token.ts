// imports principais
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

type ObjectId = mongoose.Types.ObjectId;

interface IUser {
  _id: string | ObjectId;
  name: string;
  email: string;
}

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) throw new Error("Variável de ambiente JWT_SECRET não definida");

const createUserToken = (user: IUser) => {
  const token = jwt.sign(
    {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    },
    jwtSecret
  );

  // Retorna apenas o Token
  return token;
};

export { createUserToken };
