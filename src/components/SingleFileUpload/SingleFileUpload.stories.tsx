import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';
import SingleFileUpload from './SingleFileUpload';
import { useState } from 'react';

const meta: Meta<typeof SingleFileUpload> = {
  title: 'Atoms/SingleFileUpload',
  component: SingleFileUpload,
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

const SingleFileUploadWithHooks = ({ id }: { id: string }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  const handleFileClear = () => {
    setFile(null);
  };

  return (
    <SingleFileUpload
      id={id}
      file={file}
      onFileClear={handleFileClear}
      onFileUpload={handleFileUpload}
    />
  );
};

export const Default: Story = {
  args: {
    id: 'default',
  },
  render: (args) => (
    <Container>
      <SingleFileUploadWithHooks {...args} />
    </Container>
  ),
};
