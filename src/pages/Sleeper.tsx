import { ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Grid, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { ExternalLinkButton } from '../components/Button'
import Card from '../components/Card'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import Link from '../components/Link'
import Page from '../components/Page'
import SLEEPER from '../projects/SleeperProject'

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
    <Stack p={[8, 12]} spacing={[4, 6]} mx="auto" maxW={960}>
      <Detail
        title={SLEEPER.title}
        description={SLEEPER.description}
        icon={SLEEPER.iconLarge}
        iconAlt={SLEEPER.iconAlt}
        status={SLEEPER.status}
      />

      <Gallery images={SLEEPER.gallery} />

      <Page>
        <Section title="Overview">
          <Text>Sleeper was created to experiment with animated SVG shapes using React, and to practice releasing open source products to the public. The first commit was on December 2019, the project was launched on <Link href="https://www.producthunt.com/posts/sleeper">Product Hunt</Link> in April 2020.</Text>
        </Section>

        <Section title="Architecture">
          <Text>This project uses a monorepo through yarn workspaces which contains the sleeper extension and website.</Text>
          <Text>The extension and site are built with React using create-react-app, blobs, framer-motion, and styled-components. The design is based on iOS 13 dark mode wallpapers.</Text>
          <Text>The extension workspace contains scripts to bundle and zip the project for release. The website is hosted on Netlify which watches the master branch of the Sleeper repo and automatically deploys the site on change.</Text>
          <Text>The project is versioned with npm-version, which triggers the extension build script, pushes changes and redeploys the site.</Text>
        </Section>
      </Page>

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
        <Section title="About">
          <Stack spacing={3}>
            <Text>
              An animated new tab browser extension for Chrome, Brave, Firefox and Edge.
            </Text>
          </Stack>
        </Section>

        <Section title="Built With">
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
        </Section>

        <ProjectStatusSection status={SLEEPER.status} title={SLEEPER.title} />
      </Stack>
    </Flex>
  )
}