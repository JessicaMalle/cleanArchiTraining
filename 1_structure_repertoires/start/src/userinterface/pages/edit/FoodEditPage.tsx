import PageWrapper from "@foodsapp/components/PageWrapper/pageWrapper.tsx";
import InputWrapper from "@foodsapp/components/InputWrapper/InputWrapper.tsx";
import {Button, Flex} from "@chakra-ui/react";
import {container} from "@foodsapp/di/ioc.ts";

export const FoodEditPage = () => {
  const {onChangeTitle, onSubmit} = container.resolve('edit');

  return (
    <PageWrapper title="Ajoutez un nouvel article">
      <Flex direction="column" as="form" onSubmit={onSubmit}>
        <InputWrapper onChange={onChangeTitle} />
        <Button type="submit">Créer</Button>
      </Flex>
    </PageWrapper>
  );
};
