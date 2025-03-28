export default (str, limit = 55) => {
  if (str.length > limit) {
    return str.substring(0, limit) + "...";
  }
  return str;
};
