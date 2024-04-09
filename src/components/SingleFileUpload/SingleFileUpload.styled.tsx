import styled from 'styled-components';
import { Container as Button } from '../Button/Button.styled';

export const Label = styled(Button).attrs({
  as: 'label',
})`
  width: 100%;
  position: relative;
  height: 44px;
`;

export const Input = styled.input.attrs({ type: 'file' })`
  position: absolute;
  left: 0;
  opacity: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;

export const ChosenContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 8px 0 17px;
  height: 44px;
  width: 100%;
  gap: 8px;
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.basic.thriary};
  cursor: pointer;
  border-radius: 4px;
  flex-shrink: 0;
  margin-left: auto;
  transition:
    background 0.1s ease-out,
    color 0.1s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.notifications.error};
    color: ${({ theme }) => theme.colors.basic.white};
  }

  svg {
    height: 14px;
    width: 14px;
  }
`;

export const FileLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent.primary};
  overflow: hidden;
  text-decoration: none;
`;

export const LinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const TextContainer = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
