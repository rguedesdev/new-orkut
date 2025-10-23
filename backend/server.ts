import Fastify from "fastify";
import Cors from "@fastify/cors";
import mercurius from "mercurius";

// Importando configurações do GraphQL
import { schema, resolvers } from "./graphql/index.js";

const app = Fastify();

await app.register(Cors, {
  origin: "http://localhost:3000",
  methods: ["POST"],
});

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
  context: (request, reply) => {
    return { request, reply }; // aqui vai pro "context" do resolver
  },
});

// Rota GET simples
app.get("/", async (request, reply) => {
  reply.status(200).send({ message: "Olá mundo Node" });
  return;
});

const port = 5000;

await app.listen({ port: port });
console.log("Servidor rodando na porta: " + port);
