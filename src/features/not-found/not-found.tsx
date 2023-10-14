import React from 'react';
import { Text, Center, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const [countdown, setCountdown] = React.useState<number>(5);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  };

  const updateCountdown = () => {
    if (countdown > 0) {
      setCountdown(countdown - 1);
    } else {
      redirectToHome();
    }
  };

  React.useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  return (
    <Center height="50vh" flexDirection="column">
      <Text fontSize="6xl" fontWeight="bold">
        404
      </Text>
      <Text fontSize="xl" fontWeight="semibold" mb="4">
        Página no encontrada
      </Text>
      <Link to="/">
        <Text fontSize="xl" fontWeight="semibold" mb="4">
          Redirigiendo al inicio en {countdown} segundos...
        </Text>
      </Link>
    </Center>
  );
};
