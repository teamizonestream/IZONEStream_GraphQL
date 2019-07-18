import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import mongoose from "mongoose";
import dbConfig from "./database.json";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

const url = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@${
  dbConfig.url
}/${dbConfig.name}`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

server.start(() => {
  console.log("IZONEStream GraphQL Server is Running!");
});
