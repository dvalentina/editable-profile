import {
  CloseIconContainer,
  Container,
  StatusIconContainer,
  Text,
} from './Notification.styled';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';
import { ReactComponent as WarningIcon } from '../../assets/WarningIcon.svg';
import { ReactComponent as ErrorIcon } from '../../assets/ErrorIcon.svg';
import { useState } from 'react';

export interface INotification {
  status: 'warning' | 'error';
  text: string;
  onClose: () => void;
  isVisible: boolean;
}

function Notification({ status, text, onClose, isVisible }: INotification) {
  const [display, setDisplay] = useState(true);

  const handleClose = () => {
    onClose();
    setTimeout(() => setDisplay(false), 150);
  };

  return (
    <Container $visible={isVisible} $display={display}>
      <StatusIconContainer $status={status}>
        {status === 'error' ? <ErrorIcon /> : <WarningIcon />}
      </StatusIconContainer>
      <Text>{text}</Text>
      <CloseIconContainer onClick={handleClose}>
        <CloseIcon />
      </CloseIconContainer>
    </Container>
  );
}

export default Notification;
