import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGODB_URI as string;

const OrkkutDB = mongoose.createConnection(uri, {
  dbName: "NewOrkutDB",
});

OrkkutDB.on("connected", () => {
  console.log("Conectado ao NewOrkutDB");
});

OrkkutDB.on("error", (err) => {
  console.error("Erro na conexão ao NewOrkutDB:", err);
});

export default OrkkutDB;
