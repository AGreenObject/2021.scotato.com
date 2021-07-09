import { Link, LinkProps } from "react-router-dom";
import { SquircleMask } from "@scotato/react-squircle";
import { Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

function SquircleButton(props: ButtonProps) {
  return (
    <SquircleMask p1={4} p2={16}>
      <Button size="lg" borderRadius={0} width="100%" {...props} />
    </SquircleMask>
  );
}

export function LinkButton(props: ButtonProps & LinkProps) {
  const bg = useColorModeValue("blue.100", "blue.900");

  return (
    <SquircleMask p1={4} p2={16}>
      <Button
        as={Link}
        borderRadius={0}
        width="100%"
        _focus={{ bg }}
        {...props}
      />
    </SquircleMask>
  );
}

export default SquircleButton;
