import { useState } from 'react';
import { Container, Input as StyledInput, Label } from './Input.styled';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactDatePickerProps } from 'react-datepicker';
import DateInput from './DateInput';

interface IInput {
  label: string;
  value: string | number;
  onChange: (event: React.ChangeEvent) => void;
  type: React.HTMLInputTypeAttribute;
  required?: boolean;
  dateOptions?: ReactDatePickerProps;
}

function Input({
  label,
  value,
  onChange,
  type,
  required = false,
  dateOptions,
}: IInput) {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };

  const renderInput = () => {
    switch (type) {
      case 'date':
        return (
          <DateInput
            dateOptions={dateOptions}
            startDate={startDate}
            onChange={handleDateChange}
            required={required}
          />
        );
      default:
        return (
          <StyledInput
            value={value}
            onChange={onChange}
            id={label}
            type={type}
            name={label}
            required={required}
          />
        );
    }
  };

  return (
    <Container $type={type}>
      <Label htmlFor={label}>{label}</Label>
      {renderInput()}
    </Container>
  );
}

export default Input;
