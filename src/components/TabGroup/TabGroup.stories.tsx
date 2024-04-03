import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import TabGroup from './TabGroup';
import { useState } from 'react';

const meta: Meta<typeof TabGroup> = {
  title: 'Molecules/Tabs/TabGroup',
  component: TabGroup,
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

const TabGroupWithHooks = ({ labels }: { labels: string[] }) => {
  const [chosenTab, setChosenTab] = useState(labels[0]);

  return (
    <TabGroup
      chosen={chosenTab}
      handleChange={(label) => setChosenTab(label)}
      labels={labels}
    />
  );
};

export const Default: Story = {
  args: {
    labels: ['Personal', 'Company'],
  },
  render: (args) => (
    <Container>
      <TabGroupWithHooks {...args} />
    </Container>
  ),
};
