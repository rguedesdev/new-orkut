import UserController from "../../controller/UserController.js";

const userTypeDefs = `
  type Query {
    test: String
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
    test: () => "Funcionou!",
  },
  Mutation: {
    // Cadastro
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

    // Login
    signIn: (
      _: any,
      { input }: { input: { email: string; password: string } }
    ) => UserController.signIn(input),
  },
};

export { userTypeDefs, userResolvers };
