import { Stack, StackProps, useColorModeValue } from "@chakra-ui/react";
import { SquircleMask } from "@scotato/react-squircle";

const Page = (props: StackProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <SquircleMask p1={8} p2={48}>
      <Stack bg={bg} p={[6, 8]} spacing={8} fontSize={20} {...props} />
    </SquircleMask>
  );
};

export default Page;
