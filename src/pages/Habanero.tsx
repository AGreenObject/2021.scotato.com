import { Text } from "@chakra-ui/react";
import { ProjectPage, ProjectCard, ProjectSidebar } from '../components/Project'
import Section from '../components/Section'
import Link from '../components/Link'
import HABANERO from '../projects/HabaneroProject'

export function HabaneroPage() {
  return (
    <ProjectPage project={HABANERO}>
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
    </ProjectPage>
  )
}

export const HabaneroSidebar = () => <ProjectSidebar project={HABANERO} />
export const HabaneroCard = () => <ProjectCard project={HABANERO} />
