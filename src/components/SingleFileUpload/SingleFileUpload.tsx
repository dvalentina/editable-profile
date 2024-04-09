import { useEffect, useRef, useState } from 'react';
import {
  Label,
  Input,
  ChosenContainer,
  ClearButton,
  FileLink,
  LinkIconContainer,
  TextContainer,
} from './SingleFileUpload.styled';
import { ReactComponent as LinkIcon } from '../../assets/LinkIcon.svg';
import { ReactComponent as CloseIcon } from '../../assets/CloseIcon.svg';

interface ISingleFileUpload {
  id: string;
  file: File | null;
  onFileUpload: (file: File) => void;
  onFileClear: () => void;
}

function SingleFileUpload({
  id,
  file,
  onFileUpload,
  onFileClear,
}: ISingleFileUpload) {
  const [fileURL, setFileURL] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;

    if (files) {
      onFileUpload(files[0]);
    }
  };

  const handleFileClear = () => {
    onFileClear();
    if (inputRef.current) {
      inputRef.current.files = null;
    }
  };

  useEffect(() => {
    if (!file) {
      setFileURL('');
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setFileURL(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <>
      {file ? (
        <ChosenContainer>
          <FileLink href={fileURL} target='_blank'>
            <LinkIconContainer>
              <LinkIcon />
            </LinkIconContainer>
            <TextContainer title={file.name}>{file.name}</TextContainer>
          </FileLink>
          <ClearButton onClick={handleFileClear}>
            <CloseIcon />
          </ClearButton>
        </ChosenContainer>
      ) : (
        <Label $variant='accent' htmlFor={`file-upload__${id}`}>
          <span>Upload</span>
          <Input
            id={`file-upload__${id}`}
            onChange={handleChange}
            ref={inputRef}
          />
        </Label>
      )}
    </>
  );
}

export default SingleFileUpload;
