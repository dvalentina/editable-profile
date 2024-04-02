import { Container } from './Button.styled';

interface IButton {
  variant: 'primary' | 'secondary' | 'accent';
  label: string;
  onClick: () => void;
  className?: string;
}

function Button({ variant, label, onClick, className }: IButton) {
  return (
    <Container $variant={variant} onClick={onClick} className={className}>
      {label}
    </Container>
  );
}

export default Button;
