import { extractNumber } from './extractNumber';

export const shouldShowCar = ({ brand, price, mileage }, filters) => {
  const brandFilter = filters.brand === '' ? true : filters.brand === brand;
  const priceFilter =
    filters.maxTrafik === '' ? true : extractNumber(price) <= filters.maxTrafik;
  const minMielageFilter =
    filters.minMileage === '' ? true : mileage >= filters.minMileage;
  const maxMielageFilter =
    filters.maxMileage === '' ? true : mileage <= filters.maxMileage;

  return brandFilter && priceFilter && minMielageFilter && maxMielageFilter;
};
