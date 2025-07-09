import { ReactNode, useState, useRef } from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';

interface FileUploadProps {
  onChange?: (imageUrl: string) => void;
  label?: string;
}

function FileUpload({ onChange, label = 'Upload Image' }: FileUploadProps): ReactNode {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result as string;
      setPreview(imageUrl);
      if (onChange) {
        onChange(imageUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box mt={4} mb={4}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <Button onClick={handleButtonClick} colorScheme="blue" mb={2}>
        {label}
      </Button>
      {preview && (
        <Box mt={2}>
          <Image src={preview} alt="Preview" maxH="200px" />
        </Box>
      )}
      {!preview && (
        <Text color="gray.500" mt={2}>
          No image selected
        </Text>
      )}
    </Box>
  );
}

export default FileUpload;
