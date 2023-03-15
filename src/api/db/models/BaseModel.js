// import config from "@/api/config";
import knex from "knex";
import { Model } from "objection";
import config from "../../config";

class BaseModel extends Model {}

BaseModel.knex(knex(config.db));

export default BaseModel;
