import React, { useState } from 'react';
import {
  ModalContainer,
  CloseButton,
  LogoContainer,
  LogoText,
  RightInfoContainer,
  ActionButtonsContainer,
} from './EditSettingsModal.styled';
import {
  Description,
  LeftContainer,
  LeftInfoContainer,
  Title,
  RightContainer,
} from './EditSettingsModal.styled';
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';
import Notification from '../Notification/Notification';
import Button from '../Button/Button';

interface IInfo {
  title: string;
  description: string;
}

interface INotification {
  status: 'error' | 'warning';
  text: string;
}

interface IEditSettingsModal {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  leftInfo: IInfo;
  rightInfo: IInfo;
  notification?: INotification;
}

function EditSettingsModal({
  isOpen,
  onClose,
  leftInfo,
  rightInfo,
  notification,
}: IEditSettingsModal) {
  const [isNotifVisible, setIsNotifVisible] = useState(!!notification);

  const handleCloseNotification = () => {
    setIsNotifVisible(false);
  };

  return isOpen ? (
    <ModalContainer>
      <LeftContainer>
        <LogoContainer>
          <LogoIcon />
          <LogoText>CompanyInvest</LogoText>
        </LogoContainer>
        <LeftInfoContainer>
          <Title>{leftInfo.title}</Title>
          <Description>{leftInfo.description}</Description>
          {notification ? (
            <Notification
              status={notification.status}
              text={notification.text}
              onClose={handleCloseNotification}
              isVisible={isNotifVisible}
            />
          ) : null}
        </LeftInfoContainer>
      </LeftContainer>
      <RightContainer>
        <RightInfoContainer>
          <Title>{rightInfo.title}</Title>
          <Description>{rightInfo.description}</Description>
        </RightInfoContainer>
        <ActionButtonsContainer>
          <Button variant='secondary' label='Cancel' onClick={() => {}} />
          <Button variant='primary' label='Save Changes' onClick={() => {}} />
        </ActionButtonsContainer>
      </RightContainer>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </ModalContainer>
  ) : null;
}

export default EditSettingsModal;
