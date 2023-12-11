import { AdvertImage, AdvertImageContainer } from './AdvertCardImage.styled';

export const AdvertCardImage = ({ image, model, adsStyles, children }) => {
  return (
    <AdvertImageContainer customStyles={adsStyles}>
      <AdvertImage src={image} alt={model} />
      {children}
    </AdvertImageContainer>
  );
};
