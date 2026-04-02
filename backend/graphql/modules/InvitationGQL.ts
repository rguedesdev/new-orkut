import InvitationController from "../../controller/InvitationController.js";

const invitationTypeDefs = /* GraphQL */ `
  ### ROOT TYPES ###
  extend type Mutation {
    createInvitation: String!
  }
`;

const invitationResolvers: any = {
  Mutation: {
    createInvitation: (_: any, __: any, context: any) =>
      InvitationController.createInvitation(context.user?.id),
  },
};

export { invitationTypeDefs, invitationResolvers };
