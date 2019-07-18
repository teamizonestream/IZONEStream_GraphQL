import Photo from "../../models/Photo";

const getPhotos = async category => {
  return category ? await Photo.find({ category }) : await Photo.find();
};

const getPhotoById = async _id => {
  return await Photo.findById(_id);
};

export { getPhotos, getPhotoById };
