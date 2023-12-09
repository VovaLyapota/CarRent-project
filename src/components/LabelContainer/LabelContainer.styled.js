import styled from '@emotion/styled';

export const CustomLabel = styled.label`
  display: flex;
  flex-direction: column;

  ${props => props.customStyles}
`;

export const CustonLabelDescription = styled.p`
  margin: 0 0 8px;

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
