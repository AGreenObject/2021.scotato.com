import { Stack, Text, Link } from "@chakra-ui/react";

interface ReferenceProps {
  to: string;
  text: string;
}

const Reference = ({ to, text }: ReferenceProps) => (
  <Link href={to} color="blue.500" target="_blank">
    {text}
  </Link>
);

const Introduction = () => (
  <Stack mb={2} p={8} spacing={4}>
    <Stack spacing={0}>
      <Text fontWeight={700} fontSize={24} lineHeight={1}>
        Scott Dodge
      </Text>

      <Text fontSize={12} color="gray.500">
        @scotato
      </Text>

      <Text>
        Software Design & Engineering, Web3
      </Text>
    </Stack>

    <Text>
      Hey! I design and build digital products in Portland, Oregon. This site has some of my work, send me a message on <Reference to="/" text="twitter" />! You can see the source code for this site on <Reference to="/" text="github" />.
    </Text>
  </Stack>
);

export default Introduction;
