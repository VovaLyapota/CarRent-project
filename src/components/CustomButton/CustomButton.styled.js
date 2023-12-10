import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;

  width: 136px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  ${props => props.customStyles}
`;
