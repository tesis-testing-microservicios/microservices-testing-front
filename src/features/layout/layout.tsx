import React from 'react';
import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { Navbar } from '../navbar';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { Home } from '../home';
import { Implementations } from '../implementations';
import { Patterns } from '../patterns';
import { Reports } from '../reports';
import { Tests } from '../tests';

export const Layout: React.FC = () => {
  return (
    <HStack>
      <Box bgColor="gray.50">
        <Navbar />
      </Box>
      <Flex h="100vh" flexGrow="1" bgColor="white">
        <Container maxW="lg" py="10" flexGrow="1">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/patrones" Component={Patterns} />
            <Route path="/implementaciones" Component={Implementations} />
            <Route path="/reportes" Component={Reports} />
            <Route path="/tests" Component={Tests} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Container>
      </Flex>
    </HStack>
  );
};
