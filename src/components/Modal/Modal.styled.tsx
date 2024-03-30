import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const ModalTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.basic.primary};
`;

export const ModalDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.basic.secondary};
`;

export const CloseButton = styled.button`
  height: 96px;
  width: 96px;
  color: ${({ theme }) => theme.colors.basic.strokes};
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const ModalLeftSide = styled.div`
  box-sizing: border-box;
  width: 560px;
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 96px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const ModalLeftSideContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 36px;
  gap: 16px;
`;

export const ModalRightSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 96px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
