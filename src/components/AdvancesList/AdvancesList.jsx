import { AdvancesItem } from 'components/AdvancesItem';
import { AdvancesListContainer } from './AdvancesList.styled';

export const AdvancesList = () => {
  return (
    <AdvancesListContainer>
      <AdvancesItem name="More than Customers" value="4k" />
      <AdvancesItem name="Over than Cars" value="500" />
      <AdvancesItem name="Years of Reliable" value="7" />
      <AdvancesItem name="Over than Trips" value="10k" />
    </AdvancesListContainer>
  );
};
