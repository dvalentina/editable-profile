import type { Meta, StoryObj } from '@storybook/react';

import ManageAccountModal from './ManageAccountModal';
import { fn } from '@storybook/test';

const meta: Meta<typeof ManageAccountModal> = {
  title: 'Organisms/Manage account modal',
  component: ManageAccountModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
  },
};
