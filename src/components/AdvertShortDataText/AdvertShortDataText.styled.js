import styled from '@emotion/styled';

export const AdvertShortText = styled.p`
  color: rgba(18, 20, 23, 0.5);

  margin: 0 0 28px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  max-height: 40px;
  overflow-y: hidden;

  ${props => props.customStyles}
`;
