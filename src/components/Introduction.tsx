import { Link } from "react-router-dom";
import { Stack, Heading, Text, Avatar } from "@chakra-ui/react";
import Coin from './Coin'
import Hoverable from './Hoverable'
import avatarHuman from '../images/scotato-human-avatar.png'
import avatarDigital from '../images/scotato-digital-avatar.png'

const Introduction = () => (
  <Hoverable>
    <Stack as={Link} px={4} py={5} spacing={4} to="/">
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
    </Stack>
  </Hoverable>
);

export default Introduction;
