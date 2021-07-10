import { Flex, Stack, Text, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { version } from '../../package.json'
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as EthereumLogo } from "../images/ethereum-logo.svg";
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPencilRuler, faTools } from "@fortawesome/free-solid-svg-icons";
import Link from '../components/Link'
import { Link as RouterLink } from 'react-router-dom'
import Hoverable from '../components/Hoverable'
import { Section } from '../components/Sidebar'
import { GnomiesCard } from './Gnomies'
import { HabaneroCard } from './Habanero'
import { SquircleCard } from './Squircle'
import { SleeperCard } from './Sleeper'

interface AnimatedLinkProps {
  to: string;
  children: JSX.Element;
}

const AnimatedLink = (props: AnimatedLinkProps) => (
  <Hoverable>
    <RouterLink {...props} />
  </Hoverable>
)

export function HomePage() {
  return (
    <Stack p={[8, 16]} spacing={[4, 12]} mx="auto" maxW={960}>
      <AnimatedLink to="/gnomies">
        <GnomiesCard />
      </AnimatedLink>

      <AnimatedLink to="/habanero">
        <HabaneroCard />
      </AnimatedLink>

      <AnimatedLink to="/squircle">
        <SquircleCard />
      </AnimatedLink>

      <AnimatedLink to="/sleeper">
        <SleeperCard />
      </AnimatedLink>
    </Stack>
  )
}

export function HomeSidebar() {
  return (
    <Flex direction="column" px={6} py={7} height="100%">
      <Stack spacing={8} mb={8}>
        <Section
          title="About"
          body={(
            <Stack spacing={3}>
              <Text>
                Hey! I design and build digital products in Portland, Oregon. This site has some of my work.
              </Text>

              <Text>
                Send me a message on <Link to="https://twitter.com/scotato" text="Twitter" />!
              </Text>

              <Text>
              The source code for this site is available on <Link to="https://github.com/scotato/scotato.com" text="GitHub" />.
              </Text>
            </Stack>
          )}
        />

        <Section
          title="Skills"
          body={(
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faPencilRuler} color="orange.400" fontSize={18} fixedWidth />
                Product Design
              </ListItem>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faTools} color="purple.400" fontSize={18} fixedWidth />
                Software Engineering
              </ListItem>
            </List>
          )}
        />

        <Section
          title="Tools"
          body={(
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FontAwesomeIcon} icon={faJs} color="yellow.400" fontSize={20} fixedWidth />
                JavaScript / TypeScript
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
      </Stack>

      <Version />
    </Flex>
  )
}

function Version () {
  const color = useColorModeValue('gray.300', 'gray.700');

  return (
    <Text
      mt="auto"
      color={color}
      fontWeight="500"
      textAlign="center"
      children={version}
    />
  )
}
