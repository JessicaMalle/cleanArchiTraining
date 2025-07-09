import { useState } from 'react';

export function TextAreaWrapperViewModel() {
  const [text, setText] = useState<string>('');

  const onChangeValue = ({ value }: { value: string }) => {
    setText(value);
  };

  return { text, onChangeValue };
}
