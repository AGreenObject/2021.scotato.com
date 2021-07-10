import { Link as LinkChakra } from "@chakra-ui/react";

interface LinkProps {
  to: string;
  text: string;
}

function Link ({ to, text }: LinkProps) {
  return (
    <LinkChakra href={to} fontWeight={600} color="blue.500" target="_blank">
      {text}
    </LinkChakra>
  )
}

export default Link
