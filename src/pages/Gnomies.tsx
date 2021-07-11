import { Flex, Stack, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as EthereumLogo } from "../images/ethereum-logo.svg";
import { faReact, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectStatusSection } from '../components/Project'
import Card from '../components/Card'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import Link from '../components/Link'
import GNOMIES from '../projects/GnomiesProject'

export function GnomiesCard() {
  return (
    <Card
      image={GNOMIES.banner}
      imageAlt={GNOMIES.bannerAlt}
      title={GNOMIES.title}
      description={GNOMIES.description}
      icon={GNOMIES.iconLarge}
      iconAlt={GNOMIES.iconAlt}
      status={GNOMIES.status}
    />
  )
}

export function GnomiesPage() {
  return (
    <Stack p={[8, 12]} spacing={[4, 6]} mx="auto" maxW={960}>
      <Detail
        title={GNOMIES.title}
        description={GNOMIES.description}
        icon={GNOMIES.iconLarge}
        iconAlt={GNOMIES.iconAlt}
        status={GNOMIES.status}
      />

      <Gallery images={GNOMIES.gallery} />
    </Stack>
  )
}

export function GnomiesSidebar() {
  const colorGithub = useColorModeValue("gray.900", "gray.100")

  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section title="About">
          <Stack spacing={3}>
            <Text>
              Mint, Buy, Sell & Trade unique collectible NFT avatars on Ethereum.
            </Text>
          </Stack>
        </Section>

        <ProjectStatusSection status={GNOMIES.status} title={GNOMIES.title} />

        <Section title="Built With">
          <List spacing={3}>
            <ListItem>
            <ListIcon as={RedwoodLogo} fontSize={20} width="25px" />
              Redwood
            </ListItem>
            <ListItem>
              <ListIcon as={FontAwesomeIcon} icon={faReact} color="blue.400" fontSize={20} fixedWidth />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={GraphqlLogo} fontSize={20} width="25px" />
              GraphQL
            </ListItem>
            <ListItem>
              <ListIcon as={FontAwesomeIcon} icon={faNodeJs} color="green.400" fontSize={20} fixedWidth />
              Node.js
            </ListItem>
            <ListItem>
              <ListIcon as={FigmaLogo} fontSize={20} width="25px" />
              Figma
            </ListItem>
            <ListItem>
              <ListIcon as={EthereumLogo} fontSize={20} width="25px" />
              Web3
            </ListItem>
          </List>
        </Section>

        <Section title="On the Web">
          <List spacing={3}>
            <ListItem>
              <Link to={GNOMIES.url}>
                <ListIcon as={GNOMIES.icon} fontSize={20} width="25px" />
                Dapp
              </Link>
            </ListItem>
            <ListItem>
              <Link to={GNOMIES.repo}>
                <ListIcon as={FontAwesomeIcon} icon={faGithub} color={colorGithub} fontSize={20} fixedWidth />
                Source Code
              </Link>
            </ListItem>
          </List>
        </Section>
      </Stack>
    </Flex>
  )
}