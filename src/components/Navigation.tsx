import { Stack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { LinkButton } from "./Button";
import { GNOMIES } from '../pages/Gnomies'
import { HABANERO } from '../pages/Habanero'
import { SQUIRCLE } from '../pages/Squircle'
import { SLEEPER } from '../pages/Sleeper'
import { colorForStatus } from '../components/Project'
import Hoverable from './Hoverable'

const BUTTONS = [ GNOMIES, HABANERO, SQUIRCLE, SLEEPER ]

const Navigation = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "gray.800");

  return (
    <Stack p={3} flexGrow={1}>
      <Heading px={3} fontSize={20}>Apps</Heading>
      <Stack spacing={1}>
        {BUTTONS.map((content) => (
          <Hoverable key={content.id}>
            <LinkButton
              leftIcon={content.iconMedium}
              justifyContent="flex-start"
              fontWeight={500}
              px={3}
              py={6}
              iconSpacing={3}
              bg={bg}
              _hover={{ bg: bgHover }}
              to={`/${content.id}`}
            >
              <Stack spacing={0}>
                <Text>{content.title}</Text>
                <Text
                  fontSize={12}
                  fontWeight={500}
                  color={colorForStatus(content.status)}
                  children={content.status}
                />
              </Stack>
            </LinkButton>
          </Hoverable>
        ))}
      </Stack>
    </Stack>
  );
};

export default Navigation;
