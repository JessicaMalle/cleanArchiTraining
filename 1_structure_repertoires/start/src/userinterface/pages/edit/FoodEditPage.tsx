import PageWrapper from '@foodsapp/components/PageWrapper/pageWrapper.tsx';
import InputWrapper from '@foodsapp/components/InputWrapper/InputWrapper.tsx';
import TextAreaWrapper from '@foodsapp/components/TextAreaWrapper/TextAreaWrapper.tsx';
import FileUpload from '@foodsapp/components/FileUpload/FileUpload.tsx';
import { Button, Flex, FormLabel, Box } from '@chakra-ui/react';
import { container } from '@foodsapp/di/ioc.ts';

export const FoodEditPage = () => {
  const { onChangeTitle, onChangeDescription, onChangeImage, onSubmit } = container.resolve('edit');

  return (
    <PageWrapper title="Ajoutez un nouvel article">
      <Flex direction="column" as="form" onSubmit={onSubmit}>
        <Box mb={4}>
          <FormLabel htmlFor="title">Titre</FormLabel>
          <InputWrapper onChange={onChangeTitle} />
        </Box>

        <Box mb={4}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <TextAreaWrapper onChange={onChangeDescription} />
        </Box>

        <Box mb={4}>
          <FormLabel htmlFor="image">Image</FormLabel>
          <FileUpload onChange={onChangeImage} />
        </Box>

        <Button type="submit" colorScheme="pink">
          Créer
        </Button>
      </Flex>
    </PageWrapper>
  );
};
