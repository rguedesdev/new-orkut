// Imports principais
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel.js";

const getUserByToken = async (token: string): Promise<any> => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    id: string;
  };

  if (!decoded?.id) return null;

  try {
    const user = await UserModel.findOne({ _id: decoded.id })
      .select("-password")
      .lean();

    return user;
  } catch {
    return null;
  }
};

export { getUserByToken };
