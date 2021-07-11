import { faCheckCircle, faExclamationTriangle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Section } from '../components/Sidebar'

export interface Project {
  id: string;
  status: ProjectStatus;
  banner: string;
  bannerAlt: string;
  iconSmall: JSX.Element;
  iconMedium: JSX.Element;
  iconLarge: JSX.Element;
  iconAlt: string;
  title: string;
  description: string;
  date: string;
  url: string;
  repo: string;
  gallery: string[];
}

export enum ProjectStatus {
  Production = "Live",
  Development = "In Development",
  Hold = "On Hold"
}

export interface ProjectStatusSectionProps {
  status: ProjectStatus;
  title: string;
}

export function ProjectStatusSection ({ status, title }: ProjectStatusSectionProps) {
  return (
    <Section
      title="Status"
      body={(
        <Stack spacing={3}>
          <Text>
            {title} {textForStatus(status)} <Box as="span" fontWeight={600} color={colorForStatus(status)}>{status}</Box>
          </Text>
        </Stack>
      )}
    />
  )
}

export function colorForStatus (status: ProjectStatus) {
  switch (status) {
    case ProjectStatus.Production:
      return 'green.400'
    case ProjectStatus.Development:
      return 'yellow.400'
    case ProjectStatus.Hold:
      return 'gray.400'
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
