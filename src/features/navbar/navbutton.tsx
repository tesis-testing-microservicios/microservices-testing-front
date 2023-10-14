import {
  Button,
  ButtonProps,
  HStack,
  Icon,
  Text,
  chakra,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type NavButtonProps = {
  label: string;
} & ButtonProps;

export const NavButton: React.FC<NavButtonProps> = ({ label, ...props }) => {
  const Icon = chakra(FontAwesomeIcon);
  return (
    <Button justifyContent="start" {...props}>
      <Text>{label}</Text>
    </Button>
  );
};
