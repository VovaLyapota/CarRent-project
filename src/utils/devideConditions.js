export const devideConditions = inputString => {
  const regex = /[A-Z][^A-Z]*/g;

  const matches = inputString.match(regex);

  if (!matches) {
    return [];
  }

  return matches;
};
