import { ProjectStatusSection } from '../components/Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Stack, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as PostgreSQLLogo } from "../images/postgresql-logo.svg";
import { faReact, faNodeJs, faApple, faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from '../components/Card'
import Page from '../components/Page'
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

      <Page>
        <Section title="Overview">
          <Text>Habanero lets you save and share recipes from your favorite chefs and discover new and popular recipes from around the web.</Text>
          <Text>Preparing weekly meals is a time consuming process that can lead to repeatedly cooking the same meals. Habanero was built to save time and to promote recipe discovery.</Text>
        </Section>

        <Section title="Origins">
          <Text>Modern recipe blogs support a <Link to="https://schema.org/Recipe">machine readable data format</Link> defined by Schema.org which simplifies the process of crawling and archiving web recipes.</Text>
          <Text>I built a simple Node.js scraper to extract JSON+LD recipe data from webpages, then setup an app to let you scrape and save a recipe by pasting a URL into the app. In addition to saving recipes to a library, I added user accounts, meal scheduling, a shopping list, and sharing features.</Text>
          <Text>It quickly became clear that for the app to function well for discovery, the recipe import experience needed to be improved. To keep new recipes flowing into the app, I built a scraper to check the webpages of imported recipes for RSS feeds. If present, the scraper would periodically check all of the pages listed in the feeds and automatically import new recipes.</Text>
        </Section>

        <Section title="Architecture">
          <Text>The original app was built with SwiftUI and iCloud. I wanted to be able to provide a Web and Android app, so I replaced the backend with Redwood.js with PostgreSQL.</Text>
          <Text>In an attempt to simplify signups, I added "Sign in with Apple" which let users easily create an account and login with TouchID and FaceID when accessing the app through Safari.</Text>
        </Section>

        <Section title="Hiatus">
          <Text>While "Sign in with Apple" was a nice feature, it still required users to have an iCloud account. Eventually, additional authentication methods would need to be added along with many other features to compete with existing meal planners.</Text>
          <Text>I am considering this project on hold for now as I explore the Web3 world which offers new and interesting authentication methods and some potential NFT/Recipe mashups.</Text>
        </Section>
      </Page>
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
                Web App
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