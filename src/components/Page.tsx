import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { SquircleMask } from "@scotato/react-squircle";

const Page = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <SquircleMask p1={8} p2={48}>
      <Box bg={bg} {...props} />
    </SquircleMask>
  );
};

export default Page;
