import { Flex, Stack, Text, Link, List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { version } from '../../package.json'
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as EthereumLogo } from "../images/ethereum-logo.svg";
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPencilRuler, faTools } from "@fortawesome/free-solid-svg-icons";
import Section from './Section'

interface ReferenceProps {
  to: string;
  text: string;
}

const Reference = ({ to, text }: ReferenceProps) => (
  <Link href={to} fontWeight={600} color="blue.500" target="_blank">
    {text}
  </Link>
);

const Version = () => {
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

const About = () => (
  <Flex direction="column" p={6} height="100%">
    <Stack spacing={8} mb={8}>
      <Section
        title="About"
        body={(
          <Stack spacing={3}>
            <Text>
              Hey! I design and build digital products in Portland, Oregon. This site has some of my work.
            </Text>

            <Text>
              Send me a message on <Reference to="https://twitter.com/scotato" text="Twitter" />!
            </Text>

            <Text>
            The source code for this site is available on <Reference to="https://github.com/scotato/scotato.com" text="GitHub" />.
            </Text>
          </Stack>
        )}
      />

      <Section
        title="Skills"
        body={(
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FontAwesomeIcon} icon={faPencilRuler} color="orange.400" fontSize={20} fixedWidth />
              Product Design
            </ListItem>
            <ListItem>
              <ListIcon as={FontAwesomeIcon} icon={faTools} color="purple.400" fontSize={20} fixedWidth />
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
);

export default About;
