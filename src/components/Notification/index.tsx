import {
  CloseIconContainer,
  Container,
  StatusIconContainer,
  Text,
} from './Notification.styled';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';
import { ReactComponent as WarningIcon } from '../../assets/WarningIcon.svg';
import { ReactComponent as ErrorIcon } from '../../assets/ErrorIcon.svg';

interface INotification {
  status: 'warning' | 'error';
  text: string;
  onClose: () => void;
}

function Notification({ status, text, onClose }: INotification) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Container>
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
