import { ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Grid, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as PostgreSQLLogo } from "../images/postgresql-logo.svg";
import { faReact, faNodeJs, faApple } from "@fortawesome/free-brands-svg-icons";
import { ExternalLinkButton } from '../components/Button'
import Card from '../components/Card'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import HABANERO from '../projects/HabaneroProject'

export function HabaneroCard() {
  return (
    <Card
      image={HABANERO.banner}
      imageAlt={HABANERO.bannerAlt}
      title={HABANERO.title}
      description={HABANERO.description}
      icon={HABANERO.iconLarge}
      iconAlt={HABANERO.iconAlt}
      status={HABANERO.status}
    />
  )
}

export function HabaneroPage() {
  return (
    <Stack p={[8, 12]} spacing={[4, 6]} mx="auto" maxW={960}>
      <Detail
        title={HABANERO.title}
        description={HABANERO.description}
        icon={HABANERO.iconLarge}
        iconAlt={HABANERO.iconAlt}
        status={HABANERO.status}
      />

      <Gallery images={HABANERO.gallery} />

      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={6}>
        <ExternalLinkButton href={HABANERO.url} bg="blue.500">
          Web App
        </ExternalLinkButton>
        <ExternalLinkButton href={HABANERO.repo} bg="gray.500">
          Source Code
        </ExternalLinkButton>
      </Grid>
    </Stack>
  )
}

export function HabaneroSidebar() {
  const colorApple = useColorModeValue("gray.900", "gray.100")

  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section
          title="About"
          body={(
            <Stack spacing={3}>
              <Text>
                Sign in with Apple to save and discover recipes from the web and access from any device.
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
                <ListIcon as={PostgreSQLLogo} fontSize={20} width="25px" />
                PostgreSQL
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faApple} color={colorApple} fontSize={20} fixedWidth />
                Sign in with Apple
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faNodeJs} color="green.400" fontSize={20} fixedWidth />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={FigmaLogo} fontSize={20} width="25px" />
                Figma
              </ListItem>
            </List>
          )}
        />

        <ProjectStatusSection status={HABANERO.status} title={HABANERO.title} />
      </Stack>
    </Flex>
  )
}