import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import Button from './Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
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
    variant: 'primary',
    label: 'Button',
    onClick: fn(),
  },
  render: (args) => (
    <Container>
      <Button {...args} />
    </Container>
  ),
};
