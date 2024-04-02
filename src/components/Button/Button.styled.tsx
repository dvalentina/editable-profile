import styled from 'styled-components';

interface IButton {
  $variant: 'primary' | 'secondary' | 'accent';
}

export const Container = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 48px;
  min-width: 122px;
  padding: 0 24px;
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.background.contrast;
      case 'secondary':
        return theme.colors.background.primary;
      case 'accent':
        return theme.colors.accent.primary;
    }
  }};
  color: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.invertion.primary;
      case 'secondary':
        return theme.colors.basic.primary;
      case 'accent':
        return theme.colors.basic.white;
    }
  }};
  box-sizing: border-box;
  border: ${({ theme, $variant }) => {
    switch ($variant) {
      case 'primary':
        return `1px solid ${theme.colors.background.contrast}`;
      case 'secondary':
        return `1px solid ${theme.colors.basic.thriary}`;
      case 'accent':
        return `1px solid ${theme.colors.accent.primary}`;
    }
  }};
  border-radius: 4px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
