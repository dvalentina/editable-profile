import { StyledDatePicker } from './Input.styled';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactDatePickerProps } from 'react-datepicker';
import { ReactComponent as CalendarIcon } from '../../assets/CalendarIcon.svg';

interface IDateInput {
  startDate: Date;
  onChange: (date: Date) => void;
  required?: boolean;
  dateOptions?: ReactDatePickerProps;
}

function DateInput({
  startDate,
  onChange,
  required = false,
  dateOptions,
}: IDateInput) {
  return (
    <StyledDatePicker
      required={required}
      showIcon
      icon={<CalendarIcon />}
      selected={startDate}
      dateFormat='dd.MM.yyyy'
      fixedHeight
      showPopperArrow={false}
      calendarStartDay={1}
      showYearDropdown
      showMonthDropdown
      dropdownMode='select'
      popperPlacement='bottom-start'
      {...dateOptions}
      onChange={onChange}
    />
  );
}

export default DateInput;
