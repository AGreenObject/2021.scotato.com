import { Box, Flex, BoxProps, Stack, Heading, Text } from "@chakra-ui/react";
import { Project } from '../components/Project'
import { BrandIcon } from '../components/Brand'
import { ContractProjects, FullTimeProjects, IndependentProjects, EducationProjects } from '../projects/ExperienceProjects'
import Page from '../components/Page'
import Section from '../components/Section'
import Metadata from '../components/Metadata'

const Topics = (props: { projects: Project[] }) => {
  return (
    <>
      {props.projects.map((project) => (
        <Topic key={project.title} {...project} />
      ))}
    </>
  )
}

const Topic = ({ title, summary, date, tools = [], ...props }: Project & BoxProps) => {
  return (
    <Box {...props}>
      <Heading fontSize={20} textTransform="uppercase">{title}</Heading>
      <Text fontSize={16} color="gray.500">{date}</Text>
      {summary && <Text>{summary}</Text>}
      {!!tools.length && <Flex mt={2}>{tools.map(tool => <BrandIcon brand={tool} key={tool} />)}</Flex>}
    </Box>
  )
}

interface ExperienceSectionProps {
  title: string,
  children: React.ReactNode
}

function ExperienceSection ({ title, children }: ExperienceSectionProps) {
  return (
    <Page>
      <Section title={title} titleSize={28} spacing={8}>
        {children}
      </Section>
    </Page>
  )
}

export function ExperiencePage() {
  return (
    <Stack p={[4, 12]} spacing={[4, 6]} mx="auto" maxW={1024}>
      <Metadata
        title="Experience"
        description="Scott Dodge - Professional Experience"
        banner="/share-card.png"
        icon="/scotato-human-avatar-circle.png"
      />

      <ExperienceSection title="Contract Experience">
        <Topics projects={ContractProjects} />
      </ExperienceSection>

      <ExperienceSection title="Full Time Experience">
        <Topics projects={FullTimeProjects} />
      </ExperienceSection>

      <ExperienceSection title="Independent Experience">
        <Topics projects={IndependentProjects} />
      </ExperienceSection>

      <ExperienceSection title="Education">
        <Topics projects={EducationProjects} />
      </ExperienceSection>
    </Stack>
  )
}
