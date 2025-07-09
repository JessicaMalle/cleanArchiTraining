import { ReactNode, useEffect } from 'react';
import { TextAreaWrapperViewModel } from './TextAreaWrapperViewModel';
import { Textarea } from '@chakra-ui/react';

interface TextAreaWrapperProps {
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

function TextAreaWrapper({
  onChange,
  placeholder = 'Enter description...',
  value = '',
}: TextAreaWrapperProps): ReactNode {
  const { text, onChangeValue } = TextAreaWrapperViewModel();

  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== text) {
      onChangeValue({ value });
    }
  }, [value, onChangeValue, text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChangeValue({ value: newValue });
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Textarea
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      mt={4}
      mb={4}
      rows={4}
    />
  );
}

export default TextAreaWrapper;
