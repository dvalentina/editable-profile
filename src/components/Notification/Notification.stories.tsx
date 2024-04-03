import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { fn } from '@storybook/test';

import Notification from '.';

const meta: Meta<typeof Notification> = {
  title: 'Atoms/Notification',
  component: Notification,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 48px 96px;
`;

export const Default: Story = {
  args: {
    text: 'After changes a new verification will be needed',
    status: 'error',
    onClose: fn(),
  },
  render: (args) => (
    <Container>
      <Notification {...args} />
    </Container>
  ),
};
