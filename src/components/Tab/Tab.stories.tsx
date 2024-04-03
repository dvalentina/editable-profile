import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tabs/Tab',
  component: Tab,
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
    label: 'Personal',
    chosen: false,
  },
  render: (args) => (
    <Container>
      <Tab {...args} />
    </Container>
  ),
};
