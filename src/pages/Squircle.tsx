import { ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Grid, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ReactComponent as SvelteLogo } from "../images/svelte-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { faReact, faNpm } from "@fortawesome/free-brands-svg-icons";
import { Section } from '../components/Sidebar'
import { ExternalLinkButton } from '../components/Button'
import Card from '../components/Card'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import SQUIRCLE from '../projects/SquircleProject'

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
    <Stack p={[8, 12]} spacing={[4, 6]} mx="auto" maxW={960}>
      <Detail
        title={SQUIRCLE.title}
        description={SQUIRCLE.description}
        icon={SQUIRCLE.iconLarge}
        iconAlt={SQUIRCLE.iconAlt}
        status={SQUIRCLE.status}
      />

      <Gallery images={SQUIRCLE.gallery} />

      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={6}>
        <ExternalLinkButton href='https://www.figma.com/community/plugin/930173909910797614/Squircle' bg="purple.500">
          Figma Plugin
        </ExternalLinkButton>
        <ExternalLinkButton href='http://npmjs.com/package/@scotato/react-squircle' bg="red.500">
          NPM Module
        </ExternalLinkButton>
      </Grid>

      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={6}>
        <ExternalLinkButton href={SQUIRCLE.url} bg="blue.500">
          Web App
        </ExternalLinkButton>
        <ExternalLinkButton href={SQUIRCLE.repo} bg="gray.500">
          Source Code
        </ExternalLinkButton>
      </Grid>
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