// Import Controllers
import UserController from "../../controller/UserController.js";
import CommunityController from "../../controller/CommunityController.js";

const searchTypeDefs = /* GraphQL */ `
  extend type Query {
    globalSearch(search: String!): GlobalSearchResults!
  }

  type GlobalSearchResults {
    users: [User!]!
    communities: [Community!]!
  }
`;

const searchResolvers = {
  Query: {
    // (parent, args, context, info)
    globalSearch: async (_: any, { search }: any, context: any) => {
      if (!context.user) {
        throw new Error("Usuário não autenticado!");
      }

      const [users, communities] = await Promise.all([
        UserController.searchUsers(search),
        CommunityController.searchCommunities(search),
      ]);

      return {
        users,
        communities,
      };
    },
  },
};

export { searchTypeDefs, searchResolvers };
