import { shouldShowCar } from 'utils/shouldShowCar';
import { AdvertsContainer } from './AdvertsList.styled';
import { AdvertsItem } from 'components/AdvertsItem';
import { useSelector } from 'react-redux';
import { selectFilters } from 'reduxStore/filter';

export const AdvertsList = ({ cars }) => {
  const filters = useSelector(selectFilters);

  return (
    <AdvertsContainer>
      {cars.map(car => {
        return (
          shouldShowCar(
            {
              brand: car.make,
              price: car.rentalPrice,
              mileage: car.mileage,
            },
            filters
          ) && <AdvertsItem advertData={car} key={car.id} />
        );
      })}
    </AdvertsContainer>
  );
};
