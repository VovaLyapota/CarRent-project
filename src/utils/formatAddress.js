export const formatAddress = address => {
  const addressArray = address.split(',').map(part => part.trim());

  return addressArray.slice(1);
};
