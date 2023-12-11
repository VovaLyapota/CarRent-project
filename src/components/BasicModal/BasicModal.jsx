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
    const handleEsc = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeModal]);

  return (
    <>
      {isOpen &&
        createPortal(
          <ModalOverlay>
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
