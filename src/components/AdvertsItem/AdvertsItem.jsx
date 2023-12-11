import { CustomButton } from 'components/CustomButton';
import addFavoriteIcon from 'images/svg/favoriteAddIcon.svg';
import activeFavoriteIcon from 'images/svg/activeFavoriteIcon.svg';
import { AdvertContainer, FavoriteIconContainer } from './AdvertsItem.styled';
import { formatAddress } from 'utils/formatAddress';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteAdvert,
  removeFavoriteAdvert,
  selectFavorites,
} from 'reduxStore/favorites';
import { BasicModal } from 'components/BasicModal';
import { useState } from 'react';
import { AdvertCardTitle } from 'components/AdvertCardTitle';
import { AdvertCardImage } from 'components/AdvertCardImage';
import { AdvertShortDataText } from 'components/AdvertShortDataText';
import { AdvertInfo } from 'components/AdvertInfo';

export const AdvertsItem = ({ advertData }) => {
  const favorites = useSelector(selectFavorites);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const isFavoriteAdvert = favorites.some(car => car.id === advertData.id);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };
  const toggleFavorite = () =>
    dispatch(
      isFavoriteAdvert
        ? removeFavoriteAdvert(advertData.id)
        : addFavoriteAdvert(advertData)
    );

  return (
    <AdvertContainer>
      <AdvertCardImage image={advertData.img} model={advertData.model}>
        <FavoriteIconContainer onClick={toggleFavorite}>
          {isFavoriteAdvert ? (
            <img src={activeFavoriteIcon} alt="remove" />
          ) : (
            <img src={addFavoriteIcon} alt="add" />
          )}
        </FavoriteIconContainer>
      </AdvertCardImage>

      <AdvertCardTitle
        make={advertData.make}
        year={advertData.year}
        model={advertData.model}
        price={advertData.rentalPrice}
      />
      <AdvertShortDataText
        infoArray={[
          ...formatAddress(advertData.address),
          advertData.rentalCompany,
          advertData.model,
          advertData.id,
          advertData.functionalities[0],
        ]}
      />
      <CustomButton
        text="Learn more"
        handleClick={toggleModal}
        adsStyles="width: 100%; "
      />
      <BasicModal isOpen={isOpen} closeModal={toggleModal}>
        <AdvertInfo advertData={advertData} />
      </BasicModal>
    </AdvertContainer>
  );
};
