import UserController from "../../controller/UserController.js";

const userTypeDefs = `
  type Query {
    me: User
  }

  input signUpInput {
    name: String!
    nickname: String!
    email: String!
    password: String!
  }

  input signInInput {
    email: String!
    password: String!
  }


  type Attributes {
    fans: Int
    cool: Int
    sexy: Int
    reliable: Int
  } 

  type User {
    id: ID!
    name: String!
    nickname: String!
    email: String!
    attributes: Attributes
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
        input: {
          name: string;
          nickname: string;
          email: string;
          password: string;
        };
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
