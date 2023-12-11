import { NavItem } from 'components/NavItem';
import { NavigationContainer, NavigationList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavItem name="Home" path="/" />
        <NavItem name="Rent" path="/catalog" />
        <NavItem name="Favorites" path="/favorites" />
      </NavigationList>
    </NavigationContainer>
  );
};
