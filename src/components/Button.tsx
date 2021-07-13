import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { SquircleMask } from "@scotato/react-squircle";
import { Link, LinkProps, Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";
import Hoverable from './Hoverable'

function SquircleButton(props: ButtonProps) {
  return (
    <Hoverable>
      <SquircleMask p1={4} p2={16}>
        <Button size="lg" borderRadius={0} width="100%" {...props} />
      </SquircleMask>
    </Hoverable>
  );
}

function hoverColor (color?: string) {
  switch (color) {
    case 'blue.500':
      return 'blue.600'
    case 'red.500':
      return 'red.600'
    case 'yellow.500':
      return 'yellow.600'
    case 'orange.500':
      return 'orange.600'
    case 'green.500':
      return 'green.600'
    case 'pink.500':
      return 'pink.600'
    case 'purple.500':
      return 'purple.600'
    case 'gray.500':
    default:
      return 'gray.600'
  }
}

export function ExternalLinkButton(props: ButtonProps & LinkProps) {
  const color = useColorModeValue("white", "gray.900");
  const bg = hoverColor(props.bg as string)

  return (
    <Hoverable>
      <SquircleMask p1={8} p2={24}>
        <Button
          as={Link}
          borderRadius={0}
          width="100%"
          target="_blank"
          _focus={{ bg }}
          _hover={{ bg, textDecoration: 'none' }}
          p={6}
          fontSize={18}
          color={color}
          {...props}
        />
      </SquircleMask>
    </Hoverable>
  );
}

export function LinkButton(props: ButtonProps & RouterLinkProps) {
  const bg = useColorModeValue("blue.100", "blue.900");

  return (
    <SquircleMask p1={4} p2={16}>
      <Button
        as={RouterLink}
        borderRadius={0}
        width="100%"
        _focus={{ bg }}
        {...props}
      />
    </SquircleMask>
  );
}

export function LinkButtonBasic(props: ButtonProps & RouterLinkProps) {
  return (
    <Button
      as={RouterLink}
      borderRadius={0}
      bg="transparent"
      width="100%"
      _focus={{ bg: 'transparent' }}
      _hover={{ bg: 'transparent' }}
      {...props}
    />
  );
}

export default SquircleButton;
