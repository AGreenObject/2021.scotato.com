import { ReactComponent as AppIcon } from "../images/sleeper-logo.svg"
import Card from '../components/Card'
import banner from '../images/sleeper-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus, ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Text, Link, List, ListItem, ListIcon, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Detail from '../components/Detail'
import { Section } from '../components/Sidebar'


export const SLEEPER: Project = {
  id: 'sleeper',
  status: ProjectStatus.Production,
  banner,
  bannerAlt: 'Sleeper Banner',
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
  iconAlt: 'Sleeper App Icon',
  title: 'Sleeper',
  description: 'An ambient new tab browser extension',
  date: 'March 2021',
  url: 'https://Sleeper.fyi',
  repo: 'https://github.com/scotato/sleeper'
}

export function SleeperCard() {
  return (
    <Card
      image={SLEEPER.banner}
      imageAlt={SLEEPER.bannerAlt}
      title={SLEEPER.title}
      description={SLEEPER.description}
      icon={SLEEPER.iconLarge}
      iconAlt={SLEEPER.iconAlt}
      status={SLEEPER.status}
    />
  )
}

export function SleeperPage() {
  return (
    <Stack p={[8, 16]} spacing={[4, 12]} mx="auto" maxW={960}>
      <Detail
        title={SLEEPER.title}
        description={SLEEPER.description}
        icon={SLEEPER.iconLarge}
        iconAlt={SLEEPER.iconAlt}
        status={SLEEPER.status}
      />
    </Stack>
  )
}

export function SleeperSidebar() {
  const githubColor = useColorModeValue("gray.900", "gray.100")
  
  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section
          title="About"
          body={(
            <Stack spacing={3}>
              <Text>
                Install the new tab browser extension for Chrome, Brave, Firefox or Edge.
              </Text>
            </Stack>
          )}
        />

        <Section
          title="Built With"
          body={(
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faReact} color="blue.400" fontSize={20} fixedWidth />
                React
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
              <Link href={SLEEPER.url} target="_blank" display="flex" p={1}>
                <Icon as={FontAwesomeIcon} icon={faLink} color="blue.500" fontSize={20} fixedWidth />
                <Text ml={2}>{SLEEPER.url.replace('https://', '')}</Text>
              </Link>

              <Link href={SLEEPER.repo} target="_blank" display="flex" p={1}>
                <Icon as={FontAwesomeIcon} icon={faGithub} color={githubColor} fontSize={20} fixedWidth />
                <Text ml={2}>Source Code</Text>
              </Link>
            </Stack>
          )}
        />

        <ProjectStatusSection status={SLEEPER.status} title={SLEEPER.title} />
      </Stack>
    </Flex>
  )
}