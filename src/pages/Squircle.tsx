import { Text } from "@chakra-ui/react";
import { ProjectPage, ProjectCard, ProjectSidebar } from '../components/Project'
import Section from '../components/Section'
import Link from '../components/Link'
import SQUIRCLE from '../projects/SquircleProject'

export function SquirclePage() {
  return (
    <ProjectPage project={SQUIRCLE}>
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
    </ProjectPage>
  )
}

export const SquircleSidebar = () => <ProjectSidebar project={SQUIRCLE} />
export const SquircleCard = () => <ProjectCard project={SQUIRCLE} />
