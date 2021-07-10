import { Stack, Divider, BoxProps, useColorModeValue } from "@chakra-ui/react";

const Sidebar = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Stack
      spacing={0}
      position={['initial', 'sticky']}
      height={['auto', '100vh']}
      top={0}
      divider={<Divider />}
      overflowY="scroll"
      bg={bg}
      {...props}
    />
  );
};

export default Sidebar;
