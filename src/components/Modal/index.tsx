import React from 'react';
import { ModalContainer, CloseButton } from './Modal.styled';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: IModal) {
  return isOpen ? (
    <ModalContainer>
      {children}
      <CloseButton onClick={onClose}>X</CloseButton>
    </ModalContainer>
  ) : null;
}

export default Modal;
