import { ReactComponent as AppIcon } from "../images/habanero-logo.svg"
import Card from '../components/Card'
import banner from '../images/habanero-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus, ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Text, Link, List, ListItem, ListIcon, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as PostgreSQLLogo } from "../images/postgresql-logo.svg";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import Detail from '../components/Detail'
import { Section } from '../components/Sidebar'

export const HABANERO: Project = {
  id: 'habanero',
  status: ProjectStatus.Hold,
  banner,
  bannerAlt: 'Habanero Banner',
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
  iconAlt: 'Habanero App Icon',
  title: 'Habanero',
  description: 'Discover and collect recipes from the web',
  date: 'March 2021',
  url: 'https://Habanero.red',
  repo: 'https://github.com/scotato/habanero'
}

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
    <Stack p={[8, 16]} spacing={[4, 12]} mx="auto" maxW={960}>
      <Detail
        title={HABANERO.title}
        description={HABANERO.description}
        icon={HABANERO.iconLarge}
        iconAlt={HABANERO.iconAlt}
        status={HABANERO.status}
      />
    </Stack>
  )
}

export function HabaneroSidebar() {
  const githubColor = useColorModeValue("gray.900", "gray.100")
  
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

        <Section
          title="Links"
          body={(
            <Stack spacing={3}>
              <Link href={HABANERO.url} target="_blank" display="flex" p={1}>
                <Icon as={FontAwesomeIcon} icon={faLink} color="blue.500" fontSize={20} fixedWidth />
                <Text ml={2}>{HABANERO.url.replace('https://', '')}</Text>
              </Link>

              <Link href={HABANERO.repo} target="_blank" display="flex" p={1}>
                <Icon as={FontAwesomeIcon} icon={faGithub} color={githubColor} fontSize={20} fixedWidth />
                <Text ml={2}>Source Code</Text>
              </Link>
            </Stack>
          )}
        />

        <ProjectStatusSection status={HABANERO.status} title={HABANERO.title} />
      </Stack>
    </Flex>
  )
}