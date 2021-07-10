import { ReactComponent as AppIcon } from "../images/squircle-logo.svg"
import Card from '../components/Card'
import banner from '../images/squircle-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus, ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ReactComponent as SvelteLogo } from "../images/svelte-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { faReact, faNpm } from "@fortawesome/free-brands-svg-icons";
import Detail from '../components/Detail'
import { Section } from '../components/Sidebar'


export const SQUIRCLE: Project = {
  id: 'squircle',
  status: ProjectStatus.Production,
  banner,
  bannerAlt: 'Squircle Banner',
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
  iconAlt: 'Squircle App Icon',
  title: 'Squircle',
  description: 'Create squircles and superellipses in Figma',
  date: 'March 2021',
  url: 'https://squircle.app',
  repo: 'https://github.com/scotato/squircle'
}

export function SquircleCard() {
  return (
    <Card
      image={SQUIRCLE.banner}
      imageAlt={SQUIRCLE.bannerAlt}
      title={SQUIRCLE.title}
      description={SQUIRCLE.description}
      icon={SQUIRCLE.iconLarge}
      iconAlt={SQUIRCLE.iconAlt}
      status={SQUIRCLE.status}
    />
  )
}

export function SquirclePage() {
  return (
    <Stack p={[8, 16]} spacing={[4, 12]} mx="auto" maxW={960}>
      <Detail
        title={SQUIRCLE.title}
        description={SQUIRCLE.description}
        icon={SQUIRCLE.iconLarge}
        iconAlt={SQUIRCLE.iconAlt}
        status={SQUIRCLE.status}
      />
    </Stack>
  )
}

export function SquircleSidebar() {
  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section
          title="About"
          body={(
            <Stack spacing={3}>
              <Text>
                Install the Figma extension, try the Web App or install the NPM package to create this mythical shape.
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
                <ListIcon as={SvelteLogo} fontSize={20} width="25px" />
                Svelte
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faNpm} color="red.400" fontSize={20} fixedWidth />
                NPM
              </ListItem>
              <ListItem>
                <ListIcon as={FigmaLogo} fontSize={20} width="25px" />
                Figma
              </ListItem>
            </List>
          )}
        />

        <ProjectStatusSection status={SQUIRCLE.status} title={SQUIRCLE.title} />
      </Stack>
    </Flex>
  )
}