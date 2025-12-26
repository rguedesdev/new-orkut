import UserController from "../../controller/UserController.js";

const userTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  type Query {
    me: User
  }

  type Mutation {
    signUp(input: SignUpInput!, confirmPassword: String!): AuthPayload!
    signIn(input: SignInInput!): AuthPayload!
  }

  ### MAIN TYPES ###
  type User {
    id: ID!
    name: String!
    nickname: String!
    email: String!
    attributes: Attributes
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  ### AUX TYPES ###
  type Attributes {
    fans: Int
    cool: Int
    sexy: Int
    reliable: Int
  }

  ### INPUTS ###
  input SignUpInput {
    name: String!
    nickname: String!
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;

const userResolvers: any = {
  Query: {
    me: (_: any, __: any, context: any) => UserController.checkUser(context),
  },
  Mutation: {
    signUp: (_: any, { input, confirmPassword }: any) =>
      UserController.signUp({ ...input, confirmPassword }),

    signIn: (_: any, { input }: any) => UserController.signIn(input),
  },
};

export { userTypeDefs, userResolvers };
