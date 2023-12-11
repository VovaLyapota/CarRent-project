import { AdvertCardImage } from 'components/AdvertCardImage';
import {
  AdvertDescriotion,
  AdvertInfoContainer,
  TelLink,
} from './AdvertInfo.styled';
import { AdvertCardTitle } from 'components/AdvertCardTitle';
import { AdvertShortDataText } from 'components/AdvertShortDataText';
import { devideConditions } from 'utils/devideConditions';
import { RentalConditionsList } from 'components/RentalConditionsList';
import { CustomButton } from 'components/CustomButton';
import { formatAddress } from 'utils/formatAddress';

export const AdvertInfo = ({ advertData }) => {
  const {
    id,
    img,
    model,
    make,
    year,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = advertData;

  const deckrArray = [
    ...formatAddress(address),
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const conditionsArray = devideConditions(rentalConditions);
  return (
    <AdvertInfoContainer>
      <AdvertCardImage
        image={img}
        model={model}
        adsStyles="width: 100%; height: 248px; margin-bottom: 14px"
      />
      <AdvertCardTitle
        make={make}
        year={year}
        model={model}
        adsStyles="font-size: 18px; margin-bottom: 8px"
      />
      <AdvertShortDataText
        infoArray={deckrArray}
        adsStyles="margin-bottom: 14px"
      />
      <AdvertDescriotion customStyles="margin-bottom: 24px">
        {description}
      </AdvertDescriotion>
      <AdvertDescriotion>Accessories and functionalities:</AdvertDescriotion>
      <AdvertShortDataText
        infoArray={[...accessories, ...functionalities]}
        adsStyles="margin-bottom: 14px"
      />
      <AdvertDescriotion>Rental Conditions:</AdvertDescriotion>
      <RentalConditionsList conditionsArray={conditionsArray} />
      <CustomButton
        text={<TelLink href="tel:+110001111111">Rental car</TelLink>}
      />
    </AdvertInfoContainer>
  );
};
