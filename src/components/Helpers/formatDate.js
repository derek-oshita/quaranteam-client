import moment from "moment";

const formatDate = (currentFormat, desiredFormat) => {
  return moment(currentFormat).format(desiredFormat);
};

export default formatDate;
