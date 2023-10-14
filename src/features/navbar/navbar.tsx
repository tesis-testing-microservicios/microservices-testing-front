import React from 'react';

import { Flex, Stack, Text } from '@chakra-ui/react';
import { NavButton } from './navbutton';

export const Navbar = () => {
  return (
    <Flex as="section" minH="100vh" bg="bg.canvas">
      <Flex
        flex="1"
        bg="bg.surface"
        boxShadow="sm"
        maxW={{ base: 'full', sm: 'xs' }}
        py={{ base: '6', sm: '8' }}
        px={{ base: '4', sm: '6' }}
      >
        <Stack justify="space-between" spacing="1" width="full">
          <Stack spacing="8" shouldWrapChildren>
            <Stack spacing="1">
              <NavButton label="Home" />
            </Stack>
            <Stack>
              <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
                Componentes
              </Text>
              <Stack spacing="1">
                <NavButton label="Patrones" />
                <NavButton label="Implementaciones" />
                <NavButton label="Reportes" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
