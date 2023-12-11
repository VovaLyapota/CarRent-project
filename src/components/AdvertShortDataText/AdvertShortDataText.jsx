import { AdvertShortText } from './AdvertShortDataText.styled';

export const AdvertShortDataText = ({ infoArray, adsStyles }) => (
  <AdvertShortText customStyles={adsStyles}>
    {infoArray.join(' | ')}
  </AdvertShortText>
);
