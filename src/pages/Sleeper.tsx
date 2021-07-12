import { Text } from "@chakra-ui/react";
import { ProjectPage, ProjectCard, ProjectSidebar } from '../components/Project'
import Section from '../components/Section'
import Link from '../components/Link'
import SLEEPER from '../projects/SleeperProject'

export function SleeperPage() {
  return (
    <ProjectPage project={SLEEPER}>
      <Section title="Overview">
        <Text>Sleeper was created to experiment with animated SVG shapes using React and to practice releasing open source products to the public. The first commit was on December 2019 and the project was launched on <Link href="https://www.producthunt.com/posts/sleeper">Product Hunt</Link> in April 2020.</Text>
      </Section>

      <Section title="Architecture">
        <Text>This project uses a monorepo through yarn workspaces which contains the sleeper extension and website.</Text>
        <Text>The extension and site are built with React using create-react-app, blobs, framer-motion, and styled-components. The design is based on iOS 13 dark mode wallpapers.</Text>
        <Text>The extension workspace contains scripts to bundle and zip the project for release. The website is hosted on Netlify which watches the master branch of the Sleeper repo and automatically deploys the site on change.</Text>
        <Text>The project is versioned with npm-version, which triggers the extension build script, pushes changes and redeploys the site.</Text>
      </Section>
    </ProjectPage>
  )
}

export const SleeperSidebar = () => <ProjectSidebar project={SLEEPER} />
export const SleeperCard = () => <ProjectCard project={SLEEPER} />
