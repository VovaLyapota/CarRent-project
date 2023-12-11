export const extractNumber = inputString => {
  const matches = inputString.match(/\d+/);

  if (matches) {
    return parseInt(matches[0], 10);
  } else {
    return null;
  }
};
