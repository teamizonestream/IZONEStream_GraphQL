import Photo from "../../models/Photo";

const getPhotos = async (category, page) => {
  if (category) {
    return page
      ? await Photo.find({ category })
          .skip((page - 1) * 10)
          .limit(10)
      : await Photo.find({ category });
  }

  return page
    ? await Photo.find()
        .skip((page - 1) * 10)
        .limit(10)
    : await Photo.find();
};

const getPhotoById = async _id => {
  return await Photo.findById(_id);
};

export { getPhotos, getPhotoById };
