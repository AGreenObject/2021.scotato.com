import { ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as PostgreSQLLogo } from "../images/postgresql-logo.svg";
import { faReact, faNodeJs, faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from '../components/Card'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import Link from '../components/Link'
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
    </Stack>
  )
}

export function HabaneroSidebar() {
  const colorApple = useColorModeValue("gray.900", "gray.100")
  const colorGithub = useColorModeValue("gray.900", "gray.100")

  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section title="About">
          <Stack spacing={3}>
            <Text>
              Sign in with Apple to save and discover recipes from the web and access from any device.
            </Text>
          </Stack>
        </Section>

        <ProjectStatusSection status={HABANERO.status} title={HABANERO.title} />

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
        </Section>

        <Section title="On the Web">
          <List spacing={3}>
            <ListItem>
              <Link to={HABANERO.url}>
                <ListIcon as={HABANERO.icon} fontSize={20} width="25px" />
                Website
              </Link>
            </ListItem>
            <ListItem>
              <Link to={HABANERO.repo}>
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