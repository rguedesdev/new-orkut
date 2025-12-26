import { CommunityModel } from "../models/CommunityModel.js";

class CommunityController {
  static async createCommunity({
    name,
    description,
    category,
    privacy,
    country,
    language,
    ownerID,
  }: {
    name: string;
    description: string;
    category: string;
    privacy: string;
    country: string;
    language: string;
    ownerID: string;
  }): Promise<any> {
    if (!name) throw new Error("O nome da comunidade é obrigatório!");

    if (!description)
      throw new Error("A descrição da comunidade é obrigatória!");

    if (!category) throw new Error("A categoria da comunidade é obrigatória!");

    if (!privacy) throw new Error("A privacidade da comunidde é obrigatória!");

    if (!country) throw new Error("O país da comunidade é obrigatório!");

    if (!language) throw new Error("O idioma da comunidade é obrigatório!");

    try {
      const community = new CommunityModel({
        name: name,
        description: description,
        category: category,
        privacy: privacy,
        country: country,
        language: language,
        ownerID: ownerID,
        moderators: [],
        members: 1,
      });

      const newCommunity = await community.save();

      return newCommunity;
    } catch (error) {
      console.error("Erro ao tentar criar a comunidade!", error);
      throw new Error("Erro ao tentar criar a comunidade!");
    }
  }

  static async getCommunityById(id: string) {
    const community = await CommunityModel.findById(id).lean();

    if (!community) return null;

    // O GraphQL vai ler as propriedades deste objeto:
    return {
      ...community, // Espalha name, description, category...
      id: community._id.toString(), // Cria o campo 'id' que o Schema exige usando o valor do '_id'
    };
  }
}

export default CommunityController;
