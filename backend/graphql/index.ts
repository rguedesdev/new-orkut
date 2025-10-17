// Importando Schemas e Resolvers
import { userTypeDefs, userResolvers } from "./modules/UserGQL.js";

// Combina schemas
const schema = `
  ${userTypeDefs}
`;

// Combina resolvers
const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};

export { schema, resolvers };
