import { Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type NavButtonProps = {
  icon: IconName;
  label: string;
} & ButtonProps;

export const NavButton: React.FC<NavButtonProps> = ({
  icon,
  label,
  ...props
}) => {
  return (
    <Button justifyContent="start" {...props}>
      <HStack spacing="3">
        <Icon as={FontAwesomeIcon} icon={icon} boxSize="6" />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};
