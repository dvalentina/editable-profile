import React from 'react';
import {
  ModalContainer,
  CloseButton,
  LogoContainer,
  LogoText,
  RightInfoContainer,
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

interface IInfo {
  title: string;
  description: string;
}

interface IEditSettingsModal {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  leftInfo: IInfo;
  rightInfo: IInfo;
}

function EditSettingsModal({
  isOpen,
  onClose,
  leftInfo,
  rightInfo,
}: IEditSettingsModal) {
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
        </LeftInfoContainer>
      </LeftContainer>
      <RightContainer>
        <RightInfoContainer>
          <Title>{rightInfo.title}</Title>
          <Description>{rightInfo.description}</Description>
        </RightInfoContainer>
      </RightContainer>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </ModalContainer>
  ) : null;
}

export default EditSettingsModal;
