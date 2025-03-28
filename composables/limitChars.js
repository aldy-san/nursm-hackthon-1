export default (str, limit = 75) => {
  if (str.length > limit) {
    return str.substring(0, limit) + "...";
  }
  return str;
};
