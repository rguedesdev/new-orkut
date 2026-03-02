// Import do Controller
import CommunityController from "../../controller/CommunityController.js";

const communityTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Mutation {
    createCommunity(input: CreateCommunityInput!): Community!
  }

  extend type Query {
    community(id: ID!): Community
    # searchCommunities(search: String!): [Community!]!
  }

  ### INPUTS ###
  input CreateCommunityInput {
    name: String!
    description: String!
    category: String!
    privacy: String!
    country: String!
    language: String!
  }

  ### MAIN TYPE ###
  type Community {
    id: ID!
    name: String!
    description: String!
    category: String!
    privacy: String!
    country: String!
    language: String!
    ownerID: ID!
    moderators: [User]
    members: Int!
    createdAt: String!
  }
`;

const communityResolvers = {
  Query: {
    community: (_: any, { id }: any, context: any) => {
      if (!context.user) {
        throw new Error("Usuário não autenticado");
      }

      return CommunityController.getCommunityById(id);
    },

    // searchCommunities: (_: any, { search }: any, context: any) => {
    //   if (!context.user) {
    //     throw new Error("Usuário não autenticado");
    //   }

    //   return CommunityController.searchCommunities(search);
    // },
  },

  Mutation: {
    createCommunity: (_: any, { input }: any, context: any) => {
      if (!context.user) {
        throw new Error("Usuário não autenticado!");
      }

      return CommunityController.createCommunity({
        ...input,
        ownerID: context.user.id,
      });
    },
  },
};

export { communityTypeDefs, communityResolvers };
