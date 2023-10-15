import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

export const Reports: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb="6">
        Reportes
      </Heading>
      <Text fontSize="lg" mb="4">
        Contenido de reportes
      </Text>
    </Box>
  );
};
