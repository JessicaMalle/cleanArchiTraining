import { Box, BoxProps, Flex, FlexProps, Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

// Root component
interface CardRootProps extends FlexProps {
  children: ReactNode;
}

const Root = ({ children, ...props }: CardRootProps) => {
  return (
    <Flex flexDirection="column" borderRadius="0.8rem" overflow="hidden" boxShadow="md" {...props}>
      {children}
    </Flex>
  );
};

// Body component
interface CardBodyProps extends FlexProps {
  children: ReactNode;
}

const Body = ({ children, ...props }: CardBodyProps) => {
  return (
    <Flex padding="1.6rem" flexDirection="column" {...props}>
      {children}
    </Flex>
  );
};

// Title component
interface CardTitleProps extends TextProps {
  children: ReactNode;
}

const Title = ({ children, ...props }: CardTitleProps) => {
  return (
    <Text fontSize="1.6rem" fontWeight="700" {...props}>
      {children}
    </Text>
  );
};

// Description component
interface CardDescriptionProps extends TextProps {
  children: ReactNode;
}

const Description = ({ children, ...props }: CardDescriptionProps) => {
  return (
    <Text fontSize="1.4rem" {...props}>
      {children}
    </Text>
  );
};

// Footer component
interface CardFooterProps extends FlexProps {
  children: ReactNode;
}

const Footer = ({ children, ...props }: CardFooterProps) => {
  return (
    <Flex padding="1.6rem" justifyContent="flex-start" alignItems="center" {...props}>
      {children}
    </Flex>
  );
};

// Export all components as a namespace
export const Card = {
  Root,
  Body,
  Title,
  Description,
  Footer,
};
