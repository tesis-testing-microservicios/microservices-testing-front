import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  ChakraProvider,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { Navbar } from './features/navbar/navbar';

function App() {
  return (
    <ChakraProvider>
      <HStack>
        <Box bgColor="gray.50">
          <Navbar />
        </Box>
        <Flex h="100vh" flexGrow="1" bgColor="white">
          <Container maxW="container.lg" py={10} flexGrow={1}>
            <Heading as="h1" size="xl" mb={6}>
              Welcome to My App
            </Heading>
            <Text fontSize="lg" mb={4}>
              This is a simple example of how to add content to your app.
            </Text>
            {/* Add more content components here */}
          </Container>
        </Flex>
      </HStack>
    </ChakraProvider>
  );
}

export default App;
