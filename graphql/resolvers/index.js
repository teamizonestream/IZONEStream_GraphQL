import mongoose from "mongoose";
import database from "../../database.json";

mongoose.connect(
  `mongodb+srv://${database.username}:${database.password}@${database.url}`,
  { useNewUrlParser: true },
  err => {
    console.log(err);
  }
);

const resolvers = {
  Query: {}
};

export default resolvers;
