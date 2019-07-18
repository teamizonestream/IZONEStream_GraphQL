import { getVideos, getVideoById } from "./Video";

const resolvers = {
  Query: {
    async videos(_, { category }) {
      return await getVideos(category);
    },
    async video(_, { _id }) {
      return await getVideoById(_id);
    }
  }
};

export default resolvers;
