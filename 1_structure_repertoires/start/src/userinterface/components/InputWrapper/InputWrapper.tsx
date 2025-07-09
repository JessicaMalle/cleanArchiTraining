import { ReactNode } from 'react';
import { InputWrapperViewModel } from './InputWrapperViewModel';

interface InputWrapperProps {
  onChange?: (value: string) => void;
}

function InputWrapper({ onChange }: InputWrapperProps): ReactNode {
  const { text, onChangeValue } = InputWrapperViewModel();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeValue({ value });
    if (onChange) {
      onChange(value);
    }
  };

  return <input type="text" value={text} onChange={handleChange} />;
}

export default InputWrapper;
