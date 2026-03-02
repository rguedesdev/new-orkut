// Importando Schemas e Resolvers
import { userTypeDefs, userResolvers } from "./modules/UserGQL.js";
import {
  communityTypeDefs,
  communityResolvers,
} from "./modules/CommunityGQL.js";
import { searchResolvers, searchTypeDefs } from "./modules/SearchGQL.js";

// Combina schemas
const schema = `
  ${userTypeDefs}
  ${communityTypeDefs}
  ${searchTypeDefs}
`;

// Combina resolvers
const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...communityResolvers.Query,
    ...searchResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...communityResolvers.Mutation,
  },
};

export { schema, resolvers };
