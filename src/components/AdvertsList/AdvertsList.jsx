import { AdvertsContainer } from './AdvertsList.styled';
import { AdvertsItem } from 'components/AdvertsItem';

export const AdvertsList = ({ cars }) => {
  return (
    <AdvertsContainer>
      {cars.map(car => (
        <AdvertsItem advertData={car} key={car.id} />
      ))}
    </AdvertsContainer>
  );
};
