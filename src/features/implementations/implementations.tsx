import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';
import { GetGithubUserQuery } from './query-builder/get-github-user-query';

export const Implementations: React.FC = () => {
  console.log('chori');
  const githubUserQuery = GetGithubUserQuery.useQuery(
    {
      userName: 'brunoravera',
    },
    {
      onSuccess: () => console.log('aki2'),
      onError: () => console.log('aki3'),
      onSettled: () => console.log('aki4'),
    },
  );

  return (
    <Box>
      <Heading as="h1" size="xl" mb="6">
        Implementaciones
      </Heading>
      <Text fontSize="lg" mb="4">
        Contenido de implementaciones
      </Text>
      {githubUserQuery.data ? (
        <Text>{githubUserQuery.data.company}</Text>
      ) : (
        'nou'
      )}
    </Box>
  );
};
