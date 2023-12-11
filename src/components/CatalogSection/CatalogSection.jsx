import { AdvertsList } from 'components/AdvertsList';
import { FilterForm } from 'components/FilterForm';
import { MainContainer } from 'components/MainContainer';

export const CatalogSection = () => {
  return (
    <section>
      <MainContainer>
        <FilterForm />
        <AdvertsList />
      </MainContainer>
    </section>
  );
};
