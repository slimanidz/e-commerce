// import BaseModel from "@/api/db/models/BaseModel";
// import PoliticalParty from "@/api/db/models/PoliticalParty";
// import Answer from "@/api/db/models/Answer";
import BaseModel from "./BaseModel";

class Product extends BaseModel {
  static get tableName() {
    return "products";
  }
  static get relationMappings() {
    return {
      // politicalParty: {
      //   relation: BaseModel.BelongsToOneRelation,
      //   modelClass: PoliticalParty,
      //   join: {
      //     from: "users.politicalPartyId",
      //     to: "politicalParties.id",
      //   },
      // },
      // answers: {
      //   relation: BaseModel.ManyToManyRelation,
      //   modelClass: Answer,
      //   join: {
      //     from: "users.id",
      //     through: {
      //       from: "rel_users_answers.userId",
      //       to: "rel_users_answers.answerId",
      //     },
      //     to: "answers.id",
      //   },
      // },
    };
  }
}

export default Product;
