import Category from "../../models/Category";

const getCategories = async => {
  return Category.find();
};

const getCategoryById = async _id => {
  return await Category.findById(_id);
};

export { getCategories, getCategoryById };
