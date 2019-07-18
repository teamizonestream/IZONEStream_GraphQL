import { getVideos, getVideoById } from "./Video";
import { getPhotos, getPhotoById } from "./Photo";
import { getSchedules, getScheduleById } from "./Schedule";

const resolvers = {
  Query: {
    videos: (_, { category }) => getVideos(category),
    video: (_, { _id }) => getVideoById(_id),
    photos: (_, { category }) => getPhotos(category),
    photo: (_, { _id }) => getPhotoById(_id),
    schedules: (_, { year, month }) => getSchedules(year, month),
    schedule: (_, { _id }) => getScheduleById(_id)
  }
};

export default resolvers;
