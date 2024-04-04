import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';

interface IContainer {
  $type?: React.HTMLInputTypeAttribute;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 100%;

  position: relative;

  ${({ $type }) =>
    $type === 'date'
      ? css`
          // Custom styles for the calendar from react-datepicker library

          .react-datepicker__input-container {
            display: flex;
            align-items: center;

            &::after {
              content: '';
              display: block;
              position: absolute;
              bottom: 18px;
              right: 15px;
              width: 0;
              height: 0;
              border-top: ${({ theme }) =>
                `5px solid ${theme.colors.basic.primary}`};
              border-right: 5px solid transparent;
              border-left: 5px solid transparent;
              pointer-events: none;
            }
          }

          .react-datepicker__calendar-icon {
            width: 24px;
            height: 24px;
            color: ${({ theme }) => theme.colors.basic.thriary};
            pointer-events: none;
          }

          .react-datepicker__input-container:hover,
          .react-datepicker__input-container:focus-within {
            .react-datepicker__calendar-icon {
              color: ${({ theme }) => theme.colors.accent.primary};
            }

            &::after {
              border-top: ${({ theme }) =>
                `5px solid ${theme.colors.accent.primary}`};
            }
          }

          .react-datepicker-popper {
            .react-datepicker {
              font-family: 'Roboto', sans-serif;
              font-size: 13px;
              background: ${({ theme }) => theme.colors.background.primary};
              border: ${({ theme }) =>
                `1px solid ${theme.colors.basic.strokes}`};
              border-radius: 6px;
            }

            .react-datepicker__header {
              background: ${({ theme }) => theme.colors.background.secondary};
              border-bottom: none;
            }

            .react-datepicker__day,
            .react-datepicker__day-name {
              color: ${({ theme }) => theme.colors.basic.primary};
            }

            .react-datepicker__day:hover {
              background: ${({ theme }) => theme.colors.background.secondary};
            }

            .react-datepicker__current-month {
              display: none;
            }

            .react-datepicker__day--selected {
              background: ${({ theme }) =>
                theme.colors.accent.primary} !important;
              color: ${({ theme }) => theme.colors.basic.white};
            }

            .react-datepicker__day--keyboard-selected {
              background: ${({ theme }) => theme.colors.background.secondary};
            }

            .react-datepicker__navigation-icon {
              top: 1px;

              &::before {
                border-color: ${({ theme }) => theme.colors.basic.thriary};
              }
            }

            .react-datepicker__navigation-icon--next {
              left: 0;
            }
            .react-datepicker__navigation-icon--previous {
              right: 0;
            }

            .react-datepicker__month-select,
            .react-datepicker__year-select {
              font-family: 'Poppins', sans-serif;
              font-size: 16px;
              font-weight: 500;
              background: ${({ theme }) => theme.colors.background.secondary};
              color: ${({ theme }) => theme.colors.basic.primary};
              border-radius: 4px;
              border: ${({ theme }) =>
                `1px solid ${theme.colors.basic.thriary}`};

              cursor: pointer;

              option:checked {
                box-shadow: 0 0 10px 100px #000 inset;
              }
            }

            .react-datepicker__year-dropdown-container--select,
            .react-datepicker__month-dropdown-container--select {
              margin: 0;
            }

            .react-datepicker__header__dropdown--select {
              display: flex;
              justify-content: space-between;
              padding: 0 28px;
            }

            .react-datepicker__navigation {
              width: 28px;
            }
          }
        `
      : ''}
`;

export const Input = styled.input`
  border-radius: 6px;
  height: 44px;
  box-sizing: border-box;
  padding: 0 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.basic.strokes}`};
  background: transparent;

  color: ${({ theme }) => theme.colors.basic.primary};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.accent.secondary}`};
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.colors.accent.primary}`};
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  padding-left: 40px !important;

  width: 100%;

  border-radius: 6px;
  height: 44px;
  box-sizing: border-box;
  padding: 0 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.basic.strokes}`};
  background: transparent;

  color: ${({ theme }) => theme.colors.basic.primary};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.accent.secondary}`};
  }

  &:active,
  &:focus-visible {
    outline: none;
    border: ${({ theme }) => `1px solid ${theme.colors.accent.primary}`};
  }
`;

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.basic.primary};
  margin-bottom: 8px;
  margin-left: 1px;
`;
