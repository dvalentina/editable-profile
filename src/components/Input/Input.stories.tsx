import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background.primary};
  padding: 48px;
  display: flex;
  justify-content: center;
`;

export const Default: Story = {
  args: {
    label: 'First name',
  },
  render: (args) => (
    <Container>
      <Input {...args} />
    </Container>
  ),
};

export const DateInput: Story = {
  args: {
    label: 'Date of birth',
    type: 'date',
    dateOptions: {
      maxDate: new Date('01/01/2002'),
      openToDate: new Date('01/01/1990'),
      onChange: () => {},
    },
  },
  render: (args) => (
    <Container>
      <Input {...args} />
    </Container>
  ),
};
