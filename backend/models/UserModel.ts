import OrkkutDB from "../db/NewOrkutConn.js";
import { Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = OrkkutDB.model("Users", userSchema);

export { UserModel };
