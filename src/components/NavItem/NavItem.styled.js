import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  padding: 14px 24px;
  border-radius: 16px;
  background-color: #f7f7fb;

  color: #121417;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.4px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #e7e7fa;
  }

  &:active {
    background-color: #e7e7fa;
  }
`;
