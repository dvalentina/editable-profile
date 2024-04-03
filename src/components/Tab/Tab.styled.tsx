import styled from 'styled-components';

interface ITab {
  $chosen: boolean;
}

export const Container = styled.button<ITab>`
  display: flex;
  align-items: center;
  height: 48px;
  width: fit-content;
  padding: 0 16px;
  background: transparent;

  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme, $chosen }) =>
    $chosen ? theme.colors.basic.primary : theme.colors.basic.thriary};

  border: none;
  cursor: pointer;

  transition: color 0.3s;
`;
