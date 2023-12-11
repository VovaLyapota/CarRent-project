import styled from '@emotion/styled';

export const AdvertInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AdvertDescriotion = styled.p`
  color: #121417;

  font-size: 14px;
  line-height: 1.43;
  margin: 0 0 8px;

  ${props => props.customStyles};
`;

export const TelLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
`;
