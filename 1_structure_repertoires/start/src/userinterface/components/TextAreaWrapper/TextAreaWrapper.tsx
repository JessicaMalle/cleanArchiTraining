import { ReactNode } from "react";
import { TextAreaWrapperViewModel } from "./TextAreaWrapperViewModel";
import { Textarea } from "@chakra-ui/react";

interface TextAreaWrapperProps {
  onChange?: (value: string) => void;
  placeholder?: string;
}

function TextAreaWrapper({ onChange, placeholder = "Enter description..." }: TextAreaWrapperProps): ReactNode {
  const { text, onChangeValue } = TextAreaWrapperViewModel();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    onChangeValue({ value });
    if (onChange) {
      onChange(value);
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
