import { Link as LinkChakra, LinkProps as LinkChakraProps } from "@chakra-ui/react";

interface LinkProps {
  to?: string;
  text?: string;
}

function Link ({ to, text, children, href, ...props }: LinkProps & LinkChakraProps) {
  return (
    <LinkChakra href={to || href} fontWeight={600} color="blue.500" target="_blank" {...props}>
      {text || children}
    </LinkChakra>
  )
}

export default Link
