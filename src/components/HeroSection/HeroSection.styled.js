import styled from '@emotion/styled';
import bgImage from '../../images/heroBg_img.jpg';
import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.section`
  padding: 188px 0;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.8)
    ),
    url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroTextContainer = styled.div`
  padding: 0 16px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  text-align: center;
  margin: 0 auto 36px;
  max-width: 496px;
  font-size: 42px;
  line-height: 1.07;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const HeroButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 46px;
  margin: 0 auto 36px;

  width: 124px;
  color: #fff;
  text-decoration: none;

  border-radius: 12px;
  background: #3470ff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #1e56d1;
  }
`;
