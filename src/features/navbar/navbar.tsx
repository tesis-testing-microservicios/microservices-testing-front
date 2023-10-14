import React from 'react';

import { Flex, Stack, Text } from '@chakra-ui/react';
import { NavButton } from './navbutton';
import {
  FiHome,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiCpu,
  FiCast,
  FiPieChart,
} from 'react-icons/fi';

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
              <NavButton label="Home" icon="home" />
            </Stack>
            <Stack>
              <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
                Componentes
              </Text>
              <Stack spacing="1">
                <NavButton label="Patrones" icon="computer" />
                <NavButton label="Implementaciones" icon="cash-register" />
                <NavButton label="Reportes" icon="chart-bar" />
              </Stack>
            </Stack>
            <Stack>
              <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
                Social
              </Text>
              <Stack spacing="1">
                <NavButton label="Twitter" icon="twitter" />
                <NavButton label="Instagram" icon="instagram" />
                <NavButton label="Linkedin" icon="linkedin" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
