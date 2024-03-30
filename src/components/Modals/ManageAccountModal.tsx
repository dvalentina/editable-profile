import Modal from '../Modal';
import {
  ModalDescription,
  ModalLeftSide,
  ModalLeftSideContentContainer,
  ModalTitle,
  ModalRightSide,
} from '../Modal/Modal.styled';

interface IManageAccountModal {
  isOpen: boolean;
  onClose: () => void;
}

function ManageAccountModal({ isOpen, onClose }: IManageAccountModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalLeftSide>
        <ModalLeftSideContentContainer>
          <ModalTitle>Manage account</ModalTitle>
          <ModalDescription>
            It will take a couple of minutes. Change profile settings and
            confirm with SMS code
          </ModalDescription>
        </ModalLeftSideContentContainer>
      </ModalLeftSide>
      <ModalRightSide>
        <ModalTitle>Edit profile</ModalTitle>
        <ModalDescription>
          It will take a couple of minutes. Change profile settings and confirm
          with SMS code
        </ModalDescription>
      </ModalRightSide>
    </Modal>
  );
}

export default ManageAccountModal;
