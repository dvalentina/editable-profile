import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.basic.strokes}`};
  gap: 24px;
  height: 48px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const Glider = styled.span`
  height: 4px;
  width: 0;
  background: ${({ theme }) => theme.colors.accent.primary};

  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 1;

  transition:
    left 0.3s,
    width 0.3s;
`;
