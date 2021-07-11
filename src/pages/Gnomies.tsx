import { Flex, Stack, Grid, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as EthereumLogo } from "../images/ethereum-logo.svg";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { Section } from '../components/Sidebar'
import { ProjectStatusSection } from '../components/Project'
import { ExternalLinkButton } from '../components/Button'
import Card from '../components/Card'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
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

      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={6}>
       <ExternalLinkButton href={GNOMIES.url} bg="blue.500">
         Web App
      </ExternalLinkButton>
      <ExternalLinkButton href={GNOMIES.repo} bg="gray.500">
         Source Code
      </ExternalLinkButton>
      </Grid>
    </Stack>
  )
}

export function GnomiesSidebar() {
  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section
          title="About"
          body={(
            <Stack spacing={3}>
              <Text>
                Mint, Buy, Sell & Trade unique collectible NFT avatars on Ethereum.
              </Text>
            </Stack>
          )}
        />

        <Section
          title="Built With"
          body={(
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
          )}
        />

        <ProjectStatusSection status={GNOMIES.status} title={GNOMIES.title} />
      </Stack>
    </Flex>
  )
}