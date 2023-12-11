import { useSelector } from 'react-redux';
import { AdvertsContainer } from './AdvertsList.styled';
import { selectAdverts } from 'reduxStore/adverts';
import { AdvertsItem } from 'components/AdvertsItem';

export const AdvertsList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <AdvertsContainer>
      {adverts.map(advert => (
        <AdvertsItem advertData={advert} key={advert.id} />
      ))}
    </AdvertsContainer>
  );
};
