import { Stack, Heading, StackProps } from "@chakra-ui/react";

interface SectionProps {
  title: string;
  titleSize?: number;
}

function Section ({ title, titleSize = 20, children, ...props } : SectionProps & StackProps) {
  return (
    <Stack spacing={3} as="section" {...props}>
      <Heading fontWeight={700} fontSize={titleSize} lineHeight={1}>
        {title}
      </Heading>
  
      {children}
    </Stack>
  )
}

export default Section
