import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

export const Tests: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={6}>
        Tests
      </Heading>
      <Text fontSize="lg" mb={4}>
        Contenido de Tests
      </Text>
    </Box>
  );
};
