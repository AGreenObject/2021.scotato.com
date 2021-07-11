import { Stack, Heading, StackProps } from "@chakra-ui/react";

interface SectionProps {
  title: string;
}

function Section ({ title, children, ...props } : SectionProps & StackProps) {
  return (
    <Stack spacing={3} as="section" {...props}>
      <Heading fontWeight={700} fontSize={20} lineHeight={1}>
        {title}
      </Heading>
  
      {children}
    </Stack>
  )
}

export default Section
