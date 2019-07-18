import Video from "../../models/Video";

const getVideos = async category => {
  return category ? await Video.find({ category }) : await Video.find();
};

const getVideoById = async _id => {
  return await Video.findById(_id);
};

export { getVideos, getVideoById };
