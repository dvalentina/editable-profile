import styled from 'styled-components';

interface IContainer {
  $visible: boolean;
  $display: boolean;
}

export const Container = styled.div<IContainer>`
  display: ${({ $display }) => ($display ? 'flex' : 'none')};

  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.thriary};
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 16px;
  gap: 16px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease-in;
`;

interface IStatus {
  $status: 'error' | 'warning';
}

export const StatusIconContainer = styled.div<IStatus>`
  color: ${({ theme, $status }) => {
    switch ($status) {
      case 'error':
        return theme.colors.notifications.error;
      case 'warning':
        return theme.colors.notifications.warning;
    }
  }};
  height: 24px;
  width: 24px;
`;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.basic.thriary};
  margin-left: auto;
  padding: 0;
  cursor: pointer;
  border-radius: 4px;

  svg {
    width: 14px;
    height: 14px;
  }

  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.notifications.error};
    color: ${({ theme }) => theme.colors.basic.white};
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.basic.primary};
`;
