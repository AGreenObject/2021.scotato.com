import { ReactComponent as AppIcon } from "../images/gnomies-logo.svg"
import { Flex, Stack, Text, List, Link, ListItem, ListIcon, Icon, useColorModeValue } from "@chakra-ui/react";
import Card from '../components/Card'
import banner from '../images/gnomies-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as EthereumLogo } from "../images/ethereum-logo.svg";
import { faReact, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Detail from '../components/Detail'
import { Section } from '../components/Sidebar'
import { Project, ProjectStatus, ProjectStatusSection } from '../components/Project'

export const GNOMIES: Project = {
  id: 'gnomies',
  status: ProjectStatus.Development,
  banner,
  bannerAlt: 'Gnomies Banner',
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
  iconAlt: 'Gnomies App Icon',
  title: 'Gnomies',
  description: 'Unique collectible NFT avatars powered by Ethereum',
  date: 'March 2021',
  url: 'https://Gnomies.app',
  repo: 'https://github.com/scotato/gnomies'
}

export function GnomiesCard() {
  return (
    <Card
      image={GNOMIES.banner}
      imageAlt={GNOMIES.bannerAlt}
      title={GNOMIES.title}
      description={GNOMIES.description}
      icon={GNOMIES.iconLarge}
      iconAlt={GNOMIES.iconAlt}
      status={GNOMIES.status}
    />
  )
}

export function GnomiesPage() {
  return (
    <Stack p={[8, 16]} spacing={[4, 12]} mx="auto" maxW={960}>
      <Detail
        title={GNOMIES.title}
        description={GNOMIES.description}
        icon={GNOMIES.iconLarge}
        iconAlt={GNOMIES.iconAlt}
        status={GNOMIES.status}
      />
    </Stack>
  )
}

export function GnomiesSidebar() {
  const githubColor = useColorModeValue("gray.900", "gray.100")

  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section
          title="About"
          body={(
            <Stack spacing={3}>
              <Text>
                Mint, Buy, Sell & Trade unique collectible NFT avatars on Ethereum.
              </Text>
            </Stack>
          )}
        />

        <Section
          title="Built With"
          body={(
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
                <ListIcon as={FontAwesomeIcon} icon={faNodeJs} color="green.400" fontSize={20} fixedWidth />
                Node.js
              </ListItem>
              <ListItem>
                <ListIcon as={FigmaLogo} fontSize={20} width="25px" />
                Figma
              </ListItem>
              <ListItem>
                <ListIcon as={EthereumLogo} fontSize={20} width="25px" />
                Web3
              </ListItem>
            </List>
          )}
        />

        <Section
          title="Links"
          body={(
            <Stack spacing={3}>
              <Link href={GNOMIES.url} target="_blank" display="flex" p={1}>
                <Icon as={FontAwesomeIcon} icon={faLink} color="blue.500" fontSize={20} fixedWidth />
                <Text ml={2}>{GNOMIES.url.replace('https://', '')}</Text>
              </Link>

              <Link href={GNOMIES.repo} target="_blank" display="flex" p={1}>
                <Icon as={FontAwesomeIcon} icon={faGithub} color={githubColor} fontSize={20} fixedWidth />
                <Text ml={2}>Source Code</Text>
              </Link>
            </Stack>
          )}
        />

        <ProjectStatusSection status={GNOMIES.status} title={GNOMIES.title} />
      </Stack>
    </Flex>
  )
}