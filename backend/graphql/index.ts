// Importando Schemas e Resolvers
import { userTypeDefs, userResolvers } from "./modules/UserGQL.js";
import {
  communityTypeDefs,
  communityResolvers,
} from "./modules/CommunityGQL.js";

// Combina schemas
const schema = `
  ${userTypeDefs}
  ${communityTypeDefs}
`;

// Combina resolvers
const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...communityResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...communityResolvers.Mutation,
  },
};

export { schema, resolvers };
