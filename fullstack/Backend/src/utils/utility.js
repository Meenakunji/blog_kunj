const paginateQuery = (options) => {
  const limit =
    options && options.limit && parseInt(options.limit, 10) > 0
      ? parseInt(options.limit, 10)
      : 10;
  const page =
    options && options.page && parseInt(options.page, 10) > 0
      ? parseInt(options.page, 10)
      : 1;
  const sortOrder =
    options && options.sortOrder && parseInt(options.sortOrder)
      ? parseInt(options.sortOrder)
      : 1;
  const skip = (page - 1) * limit;
  return {
    limit,
    page,
    skip,
    sortOrder,
  };
};

/**
 * Generate random number based on length
 * @param {Number} length
 */
const generateRandomNumber = (length = 4) => {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );
};

const getNormalizedEmail = (email) => {
  const emailArray = email.split("@");
  let userName = emailArray[0];
  if (emailArray[1] == "gmail.com") {
    userName = userName.split(".").join("");
    userName = userName.split("+")[0];
  }
  return `${userName}@${emailArray[1]}`;
};

module.exports = { paginateQuery, getNormalizedEmail, generateRandomNumber };
