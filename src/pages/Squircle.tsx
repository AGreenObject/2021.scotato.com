import { ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as SvelteLogo } from "../images/svelte-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { faReact, faNpm, faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from '../components/Card'
import Page from '../components/Page'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import Section from '../components/Section'
import Link from '../components/Link'
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

      <Page>
        <Section title="Overview">
          <Text>A <Link to="https://en.wikipedia.org/wiki/Squircle">squircle</Link>, or <Link to="https://en.wikipedia.org/wiki/Superellipse">superellipse</Link>, is an intermediate shape between a square and a circle. The difference is subtle, but this shape has a much smoother transition from edge to corner than a standard rounded rectangle.</Text>
        </Section>

        <Section title="Figma Plugin">
          <Text>The initial Figma plugin was created with vanilla JS and the Figma API during the Figma community beta period. Shortly after releasing the plugin, I updated it to use the Figma design system which was built with Svelte.</Text>
          <Text>I built this project out of personal need as there were no resources available to create squircles. Since the release of this project, over 2,000 designers have found and installed this plugin through organic search.</Text>
        </Section>

        <Section title="React Package & Web App">
          <Text>The Figma Plugin is useful for static designs and asset creation, but to build UI I needed a React component so I modified an existing library and published it to use in my projects. I also built a squircle editor with React that can export SVG and PNG files to make this tool available outside of Figma.</Text>
        </Section>
      </Page>
    </Stack>
  )
}

export function SquircleSidebar() {
  const colorGithub = useColorModeValue("gray.900", "gray.100")

  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section title="About">
          <Stack spacing={3}>
            <Text>
              This suite of apps makes it easy to create the mathemagical squircle. Say goodbye to rounded rectangles.
            </Text>
          </Stack>
        </Section>

        <ProjectStatusSection status={SQUIRCLE.status} title={SQUIRCLE.title} />

        <Section title="Built With">
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
        </Section>

        <Section title="On the Web">
          <List spacing={3}>
            <ListItem>
              <Link to={SQUIRCLE.url}>
                <ListIcon as={SQUIRCLE.icon} fontSize={20} width="25px" />
                Web App
              </Link>
            </ListItem>
            <ListItem>
              <Link to="https://www.figma.com/community/plugin/930173909910797614/Squircle">
                <ListIcon as={FigmaLogo} fontSize={20} width="25px" />
                Figma Plugin
              </Link>
            </ListItem>
            <ListItem>
              <Link to="http://npmjs.com/package/@scotato/react-squircle">
                <ListIcon as={FontAwesomeIcon} icon={faNpm} color="red.400" fontSize={20} fixedWidth />
                React Package
              </Link>
            </ListItem>
            <ListItem>
              <Link to="https://github.com/scotato/club-squircle">
                <ListIcon as={FontAwesomeIcon} icon={faGithub} color={colorGithub} fontSize={20} fixedWidth />
                App Source Code
              </Link>
            </ListItem>
            <ListItem>
              <Link to={SQUIRCLE.repo}>
                <ListIcon as={FontAwesomeIcon} icon={faGithub} color={colorGithub} fontSize={20} fixedWidth />
                Plugin Source Code
              </Link>
            </ListItem>
            <ListItem>
              <Link to="https://github.com/scotato/react-squircle">
                <ListIcon as={FontAwesomeIcon} icon={faGithub} color={colorGithub} fontSize={20} fixedWidth />
                Package Source Code
              </Link>
            </ListItem>
          </List>
        </Section>
      </Stack>
    </Flex>
  )
}