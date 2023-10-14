import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb="6">
        Welcome to My App
      </Heading>
      <Text fontSize="lg" mb="4">
        This is a simple example of how to add content to your app.
      </Text>
    </Box>
  );
};
