import { CustomButton } from 'components/CustomButton';
import addFavoriteIcon from 'images/svg/favoriteAddIcon.svg';
import activeFavoriteIcon from 'images/svg/activeFavoriteIcon.svg';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteAdvert,
  removeFavoriteAdvert,
  selectFavorites,
} from 'reduxStore/favorites';

export const AdvertsItem = ({ advertData }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const isFavoriteAdvert = favorites.some(car => car.id === advertData.id);

  const openModal = () => {};

  return (
    <AdvertContainer>
      <AdvertImageContainer>
        <AdvertImage src={advertData.img} alt={advertData.model} />
        <FavoriteIconContainer
          onClick={() =>
            dispatch(
              isFavoriteAdvert
                ? removeFavoriteAdvert(advertData.id)
                : addFavoriteAdvert(advertData)
            )
          }
        >
          {isFavoriteAdvert ? (
            <img src={activeFavoriteIcon} alt="remove" />
          ) : (
            <img src={addFavoriteIcon} alt="add" />
          )}
        </FavoriteIconContainer>
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
