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
              <NavButton label="Home" icon={FiHome} />
            </Stack>
            <Stack>
              <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
                Componentes
              </Text>
              <Stack spacing="1">
                <NavButton label="Patrones" icon={FiCpu} />
                <NavButton label="Implementaciones" icon={FiCast} />
                <NavButton label="Reportes" icon={FiPieChart} />
              </Stack>
            </Stack>
            <Stack>
              <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
                Social
              </Text>
              <Stack spacing="1">
                <NavButton label="Twitter" icon={FiTwitter} />
                <NavButton label="Instagram" icon={FiInstagram} />
                <NavButton label="Linkedin" icon={FiLinkedin} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
