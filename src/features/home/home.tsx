import {
    Text,
    Heading,
  } from '@chakra-ui/react';
export const Home = () => {
  return (
    <>
      <Heading as="h1" size="xl" mb={6}>
        Welcome to My App
      </Heading>
      <Text fontSize="lg" mb={4}>
        This is a simple example of how to add content to your app.
      </Text>
    </>
  );
};
