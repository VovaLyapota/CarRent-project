import {
  AdvertModelText,
  AdvertTitleContainer,
  AdvertTitleText,
} from './AdvertCardTitle.styled';

export const AdvertCardTitle = ({ make, year, model, price, adsStyles }) => {
  return (
    <AdvertTitleContainer customStyles={adsStyles}>
      <AdvertTitleText>
        {make} <AdvertModelText>{model}</AdvertModelText>, {year}
      </AdvertTitleText>
      {price && <AdvertTitleText>{price}</AdvertTitleText>}
    </AdvertTitleContainer>
  );
};
