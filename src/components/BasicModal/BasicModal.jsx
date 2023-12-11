import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import closeIcon from 'images/svg/closeIcon.svg';
import {
  CloseButtonContainer,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './BasicModal.styled';

const modalRoot = document.querySelector('#modal-root');

export function BasicModal({ isOpen, closeModal, children }) {
  useEffect(() => {
    const handleClose = event => {
      if (event.key === 'Escape' || event.target.id === 'modal-overlay') {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleClose);
      document.addEventListener('click', handleClose);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleClose);
      document.removeEventListener('click', handleClose);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {isOpen &&
        createPortal(
          <ModalOverlay id="modal-overlay">
            <ModalContainer>
              <CloseButtonContainer onClick={closeModal}>
                <img src={closeIcon} alt="close" />
              </CloseButtonContainer>
              <ModalContent>{children}</ModalContent>
            </ModalContainer>
          </ModalOverlay>,
          modalRoot
        )}
    </>
  );
}
