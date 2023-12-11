import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(18, 20, 23, 0.5);
  opacity: 1;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalContainer = styled.div`
  position: relative;

  width: 541px;
  height: 552px;

  border-radius: 24px;
  background-color: #fff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;

  cursor: pointer;
  opacity: 0.9;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  padding: 40px;
`;
