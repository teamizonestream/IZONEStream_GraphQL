import Category from "../../models/Category";

const getCategories = () => {
  return Category.find();
};

const getCategoryById = async id => {
  return await Category.findOne({ id: id });
};

export { getCategories, getCategoryById };
