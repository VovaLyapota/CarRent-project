import { AdvertsList } from 'components/AdvertsList';
import { CustomButton } from 'components/CustomButton';
import { FilterForm } from 'components/FilterForm';
import { MainContainer } from 'components/MainContainer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, selectAdverts } from 'reduxStore/adverts';

export const CatalogSection = () => {
  const ADVERTS_QUANTITY = 32;
  const PER_PAGE = 12;

  const adverts = useSelector(selectAdverts);
  const dispatch = useDispatch();

  const shouldLoadMore =
    PER_PAGE <= adverts.length && adverts.length < ADVERTS_QUANTITY;

  return (
    <section>
      <MainContainer>
        <FilterForm />
        <AdvertsList cars={adverts} />
        {shouldLoadMore && (
          <CustomButton
            text="Load More"
            handleClick={() => {
              const page = Math.trunc(adverts.length / PER_PAGE) + 1;
              dispatch(fetchAdverts({ page }));
            }}
            adsStyles="margin: 0 auto 20px"
          />
        )}
      </MainContainer>
    </section>
  );
};
