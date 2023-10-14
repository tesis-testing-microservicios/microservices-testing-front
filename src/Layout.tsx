import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import { Home } from './features/home/home';
import { Navbar } from './features/navbar';
import { Route, Routes } from 'react-router-dom';
import { Patterns } from './features/patterns/patterns';
import { Implementations } from './features/implementations/implementations';
import { Reports } from './features/reports/reports';
import { Tests } from './features/tests/tests';
import { NotFound } from './features/not-found/not-found';

export const Layout = () => {
  return (
      <HStack>
        <Box bgColor="gray.50">
          <Navbar />
        </Box>
        <Flex h="100vh" flexGrow="1" bgColor="white">
          <Container maxW="container.lg" py={10} flexGrow={1}>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/patrones" Component={Patterns} />
              <Route path="/implementaciones" Component={Implementations} />
              <Route path="/reportes" Component={Reports} />
              <Route path="/tests" Component={Tests} />
              <Route path='*' Component={NotFound} />
            </Routes>
          </Container>
        </Flex>
      </HStack>
  );
};
