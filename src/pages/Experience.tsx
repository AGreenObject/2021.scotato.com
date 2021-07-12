import { Box, Flex, BoxProps, Stack, Heading, Text } from "@chakra-ui/react";
import Page from '../components/Page'
import Section from '../components/Section'
import { Project } from '../components/Project'
import { Brand, BrandIcon } from '../components/Brand'
import { ContractProjects, FullTimeProjects, IndependentProjects } from '../projects/ExperienceProjects'
import React from "react";

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
      <Section title={title} titleSize={32} spacing={8}>
        {children}
      </Section>
    </Page>
  )
}

export function ExperiencePage() {
  return (
    <Stack p={[8, 12]} spacing={[4, 6]} mx="auto" maxW={960}>
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
        <Topic
          title="University of Alabama at Birmingham"
          date="August 2007 - May 2011"
          summary="Graduated in May 2011 with a B.A. in Graphic Design. Studied Graphic Design, Art Direction, Typography, Sculpture, & 2D Design."
        />
        <Topic title="CodeSchool" date="June 2014 - June 2015" tools={[Brand.js]} />
        <Topic title="Codecademy" date="May 2014 - June 2014 " tools={[Brand.js]} />
        <Topic title="Harvard CS50X" date="January 2014 - April 2014" tools={[Brand.c]} />
      </ExperienceSection>
    </Stack>
  )
}
