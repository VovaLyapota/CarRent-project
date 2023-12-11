import { CustomButton } from 'components/CustomButton';
import {
  AdvertContainer,
  AdvertImage,
  AdvertImageContainer,
  AdvertModelText,
  AdvertShortDataText,
  AdvertTitleContainer,
  AdvertTitleText,
  FavoriteIconContainer,
} from './AdvertsItem.styled';
import { formatAddress } from 'utils/formatAddress';

export const AdvertsItem = ({ advertData }) => {
  const openModal = () => {};
  return (
    <AdvertContainer>
      <AdvertImageContainer>
        <AdvertImage src={advertData.img} alt={advertData.model} />
        <FavoriteIconContainer></FavoriteIconContainer>
      </AdvertImageContainer>

      <AdvertTitleContainer>
        <AdvertTitleText>
          {advertData.make}{' '}
          <AdvertModelText>{advertData.model}</AdvertModelText>,{' '}
          {advertData.year}
        </AdvertTitleText>
        <AdvertTitleText>{advertData.rentalPrice}</AdvertTitleText>
      </AdvertTitleContainer>
      <AdvertShortDataText>
        {[
          ...formatAddress(advertData.address),
          advertData.rentalCompany,
          advertData.model,
          advertData.id,
          advertData.functionalities[0],
        ].join(' | ')}
      </AdvertShortDataText>
      <CustomButton
        text="Learn more"
        handleClick={openModal}
        adsStyles="width: 100%; "
      />
    </AdvertContainer>
  );
};
