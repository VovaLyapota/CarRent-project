import { AdvancesList } from 'components/AdvancesList';
import {
  BackgroundContainer,
  HeroButton,
  HeroTextContainer,
  HeroTitle,
} from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <BackgroundContainer>
      <HeroTextContainer>
        <HeroTitle>Drive Your Experience, Rent Your Journey</HeroTitle>
        <HeroButton to="/catalog">Choose your car</HeroButton>
        <AdvancesList />
      </HeroTextContainer>
    </BackgroundContainer>
  );
};
