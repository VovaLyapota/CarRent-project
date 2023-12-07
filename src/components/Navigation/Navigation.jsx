import {
  NavigationLink,
  NavigationContainer,
  NavigationList,
  NavigationItem,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/catalog">Rent</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/favorites">Favorite</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};
