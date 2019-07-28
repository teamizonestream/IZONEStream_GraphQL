import { getVideos, getVideoById } from "./Video";
import { getPhotos, getPhotoById } from "./Photo";
import { getSchedules, getScheduleById } from "./Schedule";
import { getCategories, getCategoryById } from "./Category";
import { GraphQLScalarType } from "graphql";

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }

      return null;
    }
  }),
  Query: {
    videos: (_, { category }) => getVideos(category),
    video: (_, { _id }) => getVideoById(_id),
    photos: (_, { category }) => getPhotos(category),
    photo: (_, { _id }) => getPhotoById(_id),
    schedules: (_, { year, month }) => getSchedules(year, month),
    schedule: (_, { _id }) => getScheduleById(_id),
    categories: () => getCategories(),
    category: (_, { _id }) => getCategoryById(_id)
  }
};

export default resolvers;
