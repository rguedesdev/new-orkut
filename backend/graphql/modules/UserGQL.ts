import UserController from "../../controller/UserController.js";

//Middlewares
import { getToken } from "../../helpers/get-token.js";
import { getUserByToken } from "../../helpers/get-user-by-token.js";

const userTypeDefs = `
  type Query {
    me: User
  }

  input signUpInput {
    name: String!
    email: String!
    password: String!
  }

  input signInInput {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    token: String!
  }

  type AuthPayload {
    user: User!
    token: String!
  }
    

  type Mutation {
    signUp(input: signUpInput!, confirmPassword: String!): User
    signIn(input: signInInput!): AuthPayload
  }
`;

const userResolvers = {
  Query: {
    me: (_: any, __: any, context: any) => UserController.checkUser(context),
  },
  Mutation: {
    // Requisição de cadastro
    signUp: (
      _: any,
      {
        input,
        confirmPassword,
      }: {
        input: { name: string; email: string; password: string };
        confirmPassword: string;
      }
    ) => UserController.signUp({ ...input, confirmPassword }),

    // Requisição de login
    signIn: (
      _: any,
      { input }: { input: { email: string; password: string } }
    ) => UserController.signIn(input),
  },
};

export { userTypeDefs, userResolvers };
