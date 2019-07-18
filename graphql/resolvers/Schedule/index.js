import Schedule from "../../models/Schedule";

const getSchedules = async (year, month) => {
  return year && month
    ? Schedule.find({ year, month })
    : year
    ? Schedule.find({ year })
    : month
    ? Schedule.find({ month })
    : Schedule.find();
};

const getScheduleById = async _id => {
  return await Schedule.findById(_id);
};

export { getSchedules, getScheduleById };
