import { ReactNode } from 'react'
import { Stack, Heading } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  body: ReactNode;
}

function Section ({title, body} : SectionProps) {
  return (
    <Stack spacing={3} as="section">
      <Heading fontWeight={700} fontSize={20} lineHeight={1}>
        {title}
      </Heading>
  
      {body}
    </Stack>
  )
}

export default Section
