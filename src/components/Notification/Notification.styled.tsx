import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.thriary};
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  gap: 16px;
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
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.basic.thriary};
  margin-left: auto;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
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
