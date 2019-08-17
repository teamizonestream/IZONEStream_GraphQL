import { GraphQLDateTime } from "graphql-iso-date";
import { getVideos, getVideoById } from "./Video";
import { getPhotos, getPhotoById } from "./Photo";
import { getSchedules } from "./Schedule";
import { getCategories, getCategoryById } from "./Category";

const resolvers = {
  GraphQLDateTime: GraphQLDateTime,
  Query: {
    videos: (_, { category, page, searchText }) => getVideos(category, page, searchText),
    video: (_, { _id }) => getVideoById(_id),
    photos: (_, { category, page }) => getPhotos(category, page),
    photo: (_, { _id }) => getPhotoById(_id),
    schedules: (_, { startTime, endTime }) => getSchedules(startTime, endTime),
    categories: () => getCategories(),
    category: (_, { id }) => getCategoryById(id)
  }
};

export default resolvers;
