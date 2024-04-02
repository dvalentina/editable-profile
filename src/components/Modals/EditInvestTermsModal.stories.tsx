import type { Meta, StoryObj } from '@storybook/react';

import EditInvestTermsModal from './EditInvestTermsModal';
import { fn } from '@storybook/test';

const meta: Meta<typeof EditInvestTermsModal> = {
  title: 'Organisms/Edit invest terms modal',
  component: EditInvestTermsModal,
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
