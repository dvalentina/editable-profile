import { Container } from './Tab.styled';
import { forwardRef } from 'react';

interface ITab {
  label: string;
  chosen: boolean;
  onClick: (value: string) => void;
}

const Tab = forwardRef<HTMLButtonElement, ITab>(function Tab(
  { label, chosen, onClick },
  ref
) {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <Container $chosen={chosen} onClick={handleClick} ref={ref}>
      {label}
    </Container>
  );
});

export default Tab;
