export const formatAddress = address => {
  const [street, city, country] = address.split(',').map(part => part.trim());

  return [city, country];
};
