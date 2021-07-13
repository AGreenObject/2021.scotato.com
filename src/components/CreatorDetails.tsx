import { Link } from "react-router-dom";
import { Stack, Heading, Text, Avatar } from "@chakra-ui/react";
import { LinkButtonBasic } from "./Button";
import Coin, { CoinProps } from './Coin'
import Hoverable from './Hoverable'
import avatarHuman from '../images/scotato-human-avatar.png'
import avatarDigital from '../images/scotato-digital-avatar.png'

export const CreatorAvatar = (props: CoinProps) => (
  <Coin
    front={<Avatar name="Scott Dodge" src={avatarHuman} />}
    back={<Avatar name="@scotato" src={avatarDigital} />}
    {...props}
  />
)

export const CreatorAvatarButton = () => (
  <Hoverable whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <LinkButtonBasic p={0} bg="transparent" height="auto" to="/">
      <CreatorAvatar />
    </LinkButtonBasic>
  </Hoverable>
  
)

const CreatorDetails = () => (
  <Hoverable>
    <Stack as={Link} to="/" direction="row" py={5} px={[6, 4]}>
      <CreatorAvatar />
      <Stack spacing={0} justifyContent="center">
        <Heading fontWeight={700} fontSize={24} lineHeight={1}>
          Scott Dodge
        </Heading>

        <Text fontSize={14} color="gray.500" lineHeight={1}>
          @scotato
        </Text>
      </Stack>
    </Stack>
  </Hoverable>
);

export default CreatorDetails;
