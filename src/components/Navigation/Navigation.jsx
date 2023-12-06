import { NavLink } from 'react-router-dom';
import { LogoLink } from './Navigation.styled';
import logo from '../../images/logo.svg';

export const Navigation = () => {
  return (
    <>
      <LogoLink to="/">
        <img width="28px" height="28px" src={logo} alt="logo" />
        LearnLingo
      </LogoLink>
    </>
  );
};
