import { AdvertsList } from 'components/AdvertsList';
import { CustomButton } from 'components/CustomButton';
import { FilterForm } from 'components/FilterForm';
import { MainContainer } from 'components/MainContainer';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'reduxStore/favorites';

export const FavoritesSection = () => {
  const ADVERTS_QUANTITY = 32;
  const PER_PAGE = 12;

  const favorites = useSelector(selectFavorites);

  const shouldLoadMore =
    PER_PAGE <= favorites.length && favorites.length < ADVERTS_QUANTITY;

  return (
    <section>
      <MainContainer>
        <FilterForm />
        <AdvertsList cars={favorites} />
        {shouldLoadMore && (
          <CustomButton text="Load More" adsStyles="margin: 0 auto 20px" />
        )}
      </MainContainer>
    </section>
  );
};
