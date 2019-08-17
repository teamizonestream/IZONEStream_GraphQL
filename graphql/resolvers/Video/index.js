import Video from "../../models/Video";

const getVideos = async (category, page, searchText) => {
  if (searchText) {
    const regex = new RegExp(`/${searchText}/`);

    return Video.find({ name: regex });
  }

  if (category) {
    return page
      ? await Video.find({ category })
          .skip((page - 1) * 10)
          .limit(10)
      : await Video.find({ category });
  }

  return page
    ? await Video.find()
        .skip((page - 1) * 10)
        .limit(10)
    : await Video.find();
};

const getVideoById = async _id => {
  return await Video.findById(_id);
};

export { getVideos, getVideoById };
