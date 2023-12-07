import { NavigationItem, NavigationLink } from './NavItem.styled';

export const NavItem = ({ name, path }) => {
  return (
    <NavigationItem>
      <NavigationLink to={path}>{name}</NavigationLink>
    </NavigationItem>
  );
};
