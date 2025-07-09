import PageWrapper from '@foodsapp/components/PageWrapper/pageWrapper.tsx';
import InputWrapper from '@foodsapp/components/InputWrapper/InputWrapper.tsx';
import TextAreaWrapper from '@foodsapp/components/TextAreaWrapper/TextAreaWrapper.tsx';
import FileUpload from '@foodsapp/components/FileUpload/FileUpload.tsx';
import { Button, Flex, FormLabel, Box, Skeleton, VStack, Text } from '@chakra-ui/react';
import { container } from '@foodsapp/di/ioc.ts';

export const FoodEditPage = () => {
  const { onChangeTitle, onChangeDescription, onChangeImage, onSubmit, food, isEditMode, isLoading } = container.resolve('edit');

  const pageTitle = isEditMode ? "Modifiez l'article" : "Ajoutez un nouvel article";
  const buttonText = isEditMode ? "Modifier" : "Créer";

  // Show loading state when in edit mode and data is being fetched
  if (isLoading && isEditMode) {
    return (
      <PageWrapper title={pageTitle}>
        <VStack spacing={4} align="stretch">
          <Text mb={2}>Chargement de l'article...</Text>
          <Skeleton height="40px" mb={4} />
          <Skeleton height="100px" mb={4} />
          <Skeleton height="40px" mb={4} />
        </VStack>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={pageTitle}>
      <Flex direction="column" as="form" onSubmit={onSubmit}>
        <Box mb={4}>
          <FormLabel htmlFor="title">Titre</FormLabel>
          <InputWrapper onChange={onChangeTitle} value={food?.title || ''} />
        </Box>

        <Box mb={4}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <TextAreaWrapper onChange={onChangeDescription} value={food?.description || ''} />
        </Box>

        <Box mb={4}>
          <FormLabel htmlFor="image">Image</FormLabel>
          <FileUpload onChange={onChangeImage} value={food?.thumbnail?.url || ''} />
        </Box>

        <Button type="submit" colorScheme="pink">
          {buttonText}
        </Button>
      </Flex>
    </PageWrapper>
  );
};
