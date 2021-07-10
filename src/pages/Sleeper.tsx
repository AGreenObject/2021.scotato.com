import { ReactComponent as AppIcon } from "../images/sleeper-logo.svg"
import Card from '../components/Card'
import banner from '../images/sleeper-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus, ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Grid, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Detail from '../components/Detail'
import { Section } from '../components/Sidebar'
import { ExternalLinkButton } from '../components/Button'

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
  url: 'https://sleeper.fyi',
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
    <Stack p={[8, 16]} spacing={[4, 6]} mx="auto" maxW={960}>
      <Detail
        title={SLEEPER.title}
        description={SLEEPER.description}
        icon={SLEEPER.iconLarge}
        iconAlt={SLEEPER.iconAlt}
        status={SLEEPER.status}
      />
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={6}>
       <ExternalLinkButton href={SLEEPER.url} bg="blue.500">
         Web App
      </ExternalLinkButton>
      <ExternalLinkButton href={SLEEPER.repo} bg="gray.500">
         Source Code
      </ExternalLinkButton>
      </Grid>
    </Stack>
  )
}

export function SleeperSidebar() {
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

        <ProjectStatusSection status={SLEEPER.status} title={SLEEPER.title} />
      </Stack>
    </Flex>
  )
}