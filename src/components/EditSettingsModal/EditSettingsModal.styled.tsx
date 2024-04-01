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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    padding: 1px;
    clip-path: url(#logo);
    background-image: ${({ theme }) => theme.colors.brand.linear};
  }
`;

export const LogoText = styled.p`
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.basic.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.basic.primary};
`;

export const Description = styled.p`
  margin: 0;
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
  padding: 0;
`;

export const LeftContainer = styled.div`
  box-sizing: border-box;
  width: 560px;
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 96px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const LeftInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 36px;
  gap: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 96px;
`;

export const RightInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
