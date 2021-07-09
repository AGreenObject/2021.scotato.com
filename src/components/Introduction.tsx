import { Stack, Heading, Text, Link, Avatar } from "@chakra-ui/react";
import Coin from './Coin'
import avatarHuman from '../images/scotato-human-avatar.png'
import avatarDigital from '../images/scotato-digital-avatar.png'

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
  <Stack mb={2} px={4} py={6} spacing={4}>
    <Stack direction="row">
      <Coin
        front={<Avatar name="Scott Dodge" width="48px" height="48px" src={avatarHuman} />}
        back={<Avatar name="@scotato" width="48px" height="48px" src={avatarDigital} />}
      />
      <Stack spacing={0} justifyContent="center">
        <Heading fontWeight={700} fontSize={24} lineHeight={1}>
          Scott Dodge
        </Heading>

        <Text fontSize={14} color="gray.500" lineHeight={1}>
          @scotato
        </Text>
      </Stack>
    </Stack>

    <Text>
      Hey! I design and build digital products in Portland, Oregon. This site has some of my work, send me a message on <Reference to="/" text="twitter" />! You can see the source code for this site on <Reference to="/" text="github" />.
    </Text>
  </Stack>
);

export default Introduction;
