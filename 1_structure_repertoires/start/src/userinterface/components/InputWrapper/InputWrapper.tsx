import { ReactNode, useEffect } from 'react';
import { InputWrapperViewModel } from './InputWrapperViewModel';

interface InputWrapperProps {
  onChange?: (value: string) => void;
  value?: string;
}

function InputWrapper({ onChange, value = '' }: InputWrapperProps): ReactNode {
  const { text, onChangeValue } = InputWrapperViewModel();

  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== text) {
      onChangeValue({ value });
    }
  }, [value, onChangeValue, text]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChangeValue({ value: newValue });
    if (onChange) {
      onChange(newValue);
    }
  };

  return <input type="text" value={text} onChange={handleChange} />;
}

export default InputWrapper;
