import { faCheckCircle, faExclamationTriangle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { Box, Flex, Stack, Text, StackProps } from "@chakra-ui/react";
import { Brand } from '../components/Brand'
import { Resource } from '../components/Resource'
import { ToolList } from '../components/Tool'
import { ResourceList } from '../components/Resource'
import Section from '../components/Section'
import Card from '../components/Card'
import Page from '../components/Page'
import Detail from '../components/Detail'
import Gallery from '../components/Gallery'
import Metadata from '../components/Metadata'

export type Project = {
  id?: string;
  status?: ProjectStatus;
  banner?: string;
  bannerAlt?: string;
  icon?: any;
  iconSmall?: JSX.Element;
  iconMedium?: JSX.Element;
  iconLarge?: JSX.Element;
  iconAlt?: string;
  title: string;
  description?: string;
  summary?: string;
  date: string;
  url?: string;
  repo?: string;
  gallery?: string[];
  tools?: Brand[];
  resources?: Resource[];
}

export enum ProjectStatus {
  Production = "Live",
  Development = "In Development",
  Hold = "On Hold"
}

export interface ProjectStatusSectionProps {
  status?: ProjectStatus;
  title: string;
}

export interface ProjectPageProps {
  project: Project;
}

export interface ProjectSidebarProps {
  project: Project;
}

export interface ProjectCardProps {
  project: Project;
}

export function ProjectStatusSection ({ status = ProjectStatus.Development, title }: ProjectStatusSectionProps) {
  return (
    <Section title="Status">
      <Stack spacing={3}>
        <Text>
          {title} {textForStatus(status)} <Box as="span" fontWeight={600} color={colorForStatus(status)}>{status}</Box>
        </Text>
      </Stack>
    </Section>
  )
}

export function ProjectPage({ project, children, ...props }: ProjectSidebarProps & StackProps) {
  return (
    <Stack p={[4, 12]} spacing={[4, 6]} mx="auto" maxW={1024} {...props}>
      <Metadata
        title={project.title}
        description={project.description ?? ""}
        banner={project.banner ?? ""}
        icon={`/${project.id}-app-icon.png`}
      />

      <Detail
        title={project.title}
        description={project.description}
        icon={project.iconLarge}
        iconAlt={project.iconAlt}
        status={project.status}
      />

      <Gallery images={project.gallery} />
      <Page children={children} />
    </Stack>
  )
}

export function ProjectSidebar({ project, children, ...props }: ProjectSidebarProps & StackProps) {
  return (
    <Flex direction="column" px={6} py={7} pb={[0, 7]} height="100%">
      <Stack spacing={8} mb={8} {...props}>
        <Section title="About">
          <Stack spacing={3}>
            <Text>
              {project.summary}
            </Text>
          </Stack>
        </Section>

        <ProjectStatusSection status={project.status} title={project.title} />

        <Section title="Built With">
          <ToolList tools={project.tools} />
        </Section>

        <Section title="On the Web">
          <ResourceList {...project} />
        </Section>

        {children}
      </Stack>
    </Flex>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      image={project.banner}
      imageAlt={project.bannerAlt}
      title={project.title}
      description={project.description}
      icon={project.iconLarge}
      iconAlt={project.iconAlt}
      status={project.status}
    />
  )
}

export function colorForStatus (status?: ProjectStatus) {
  switch (status) {
    case ProjectStatus.Production:
      return 'green.400'
      case ProjectStatus.Hold:
        return 'gray.400'
      case ProjectStatus.Development:
      default:
        return 'yellow.400'
  }
}

export function iconForStatus (status: ProjectStatus) {
  switch (status) {
    case ProjectStatus.Production:
      return faCheckCircle
    case ProjectStatus.Development:
      return faExclamationTriangle
    case ProjectStatus.Hold:
      return faPauseCircle
  }
}

export function textForStatus (status: ProjectStatus) {
  switch (status) {
    case ProjectStatus.Development:
    case ProjectStatus.Production:
    case ProjectStatus.Hold:
      return "is currently"
  }
}
