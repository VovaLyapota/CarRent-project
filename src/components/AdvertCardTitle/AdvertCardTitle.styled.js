import styled from '@emotion/styled';

export const AdvertTitleContainer = styled.h3`
  display: flex;
  justify-content: space-between;
  margin: 0 0 8px;

  color: #121417;

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  ${props => props.customStyles}
`;

export const AdvertTitleText = styled.p`
  margin: 0;
`;

export const AdvertModelText = styled.span`
  color: #3470ff;
`;
