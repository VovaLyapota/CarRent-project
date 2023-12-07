import {
  AdvanceItem,
  AdvanceItemText,
  AdvanceItemValue,
} from './AdvancesItem.styled';

export const AdvancesItem = ({ name, value }) => {
  return (
    <AdvanceItem>
      <AdvanceItemText>{name}</AdvanceItemText>
      {value && <AdvanceItemValue>{value}</AdvanceItemValue>}
    </AdvanceItem>
  );
};
