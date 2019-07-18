import { getVideos, getVideoById } from "./Video";
import { getPhotos, getPhotoById } from "./Photo";

const resolvers = {
  Query: {
    videos: (_, { category }) => getVideos(category),
    video: (_, { _id }) => getVideoById(_id),
    photos: (_, { category }) => getPhotos(category),
    photo: (_, { _id }) => getPhotoById(_id)
  }
};

export default resolvers;
