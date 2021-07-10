import { ReactNode } from 'react'
import { Stack, Heading, BoxProps, useColorModeValue } from "@chakra-ui/react";

const Sidebar = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Stack
      spacing={0}
      position={['initial', 'sticky']}
      height={['auto', '100vh']}
      top={0}
      overflowY="scroll"
      bg={bg}
      {...props}
    />
  );
};

interface SectionProps {
  title: string;
  body: ReactNode;
}

export function Section ({title, body} : SectionProps) {
  return (
    <Stack spacing={4}>
      <Heading fontWeight={700} fontSize={24} lineHeight={1}>
        {title}
      </Heading>
  
      {body}
    </Stack>
  )
}

export default Sidebar;
