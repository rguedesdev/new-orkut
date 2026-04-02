// Importando Schemas e Resolvers
import { userTypeDefs, userResolvers } from "./modules/UserGQL.js";
import {
  communityTypeDefs,
  communityResolvers,
} from "./modules/CommunityGQL.js";
import { searchResolvers, searchTypeDefs } from "./modules/SearchGQL.js";
import {
  invitationResolvers,
  invitationTypeDefs,
} from "./modules/InvitationGQL.js";

// Combina schemas
const schema = `
  ${userTypeDefs}
  ${communityTypeDefs}
  ${searchTypeDefs}
  ${invitationTypeDefs}
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
    ...invitationResolvers.Mutation,
  },
};

export { schema, resolvers };
