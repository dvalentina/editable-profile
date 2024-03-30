import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: darkblue;
`;

export const ModalTitle = styled.h2`
  font-family: Poppins;
  font-size: 32px;
  line-height: 36px;
  color: white;
`;

export const ModalDescription = styled.p`
  font-family: roboto;
  font-size: 16px;
  line-height: 22px;
  color: grey;
`;

export const CloseButton = styled.button`
  height: 50px;
  width: 50px;
  color: red;
`;

export const ModalLeftSide = styled.div`
  box-sizing: border-box;
  width: 560px;
  background: purple;
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
