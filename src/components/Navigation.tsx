import { Grid, Stack, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { LinkButton, LinkButtonBasic } from "./Button";
import { colorForStatus } from '../components/Project'
import GNOMIES from '../projects/GnomiesProject'
import HABANERO from '../projects/HabaneroProject'
import SQUIRCLE from '../projects/SquircleProject'
import SLEEPER from '../projects/SleeperProject'
import Hoverable from './Hoverable'

const BUTTONS = [ GNOMIES, HABANERO, SQUIRCLE, SLEEPER ]

const Navigation = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "gray.800");

  return (
    <Stack p={[0, 3]} flexGrow={1}>
      <Heading display={['none', 'flex']} px={3} fontSize={20}>Apps</Heading>
      <Stack spacing={1} display={['none', 'flex']}>
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
              <Stack display={['none', 'flex']} spacing={0}>
                <Text>{content.title}</Text>
                <Text
                  fontSize={12}
                  fontWeight={600}
                  color={colorForStatus(content.status)}
                  children={content.status}
                />
              </Stack>
            </LinkButton>
          </Hoverable>
        ))}
      </Stack>

      <Grid
        display={['grid', 'none']}
        position="fixed"
        placeSelf="center"
        placeContent="center"
        gridAutoColumns="auto"
        gridAutoFlow="column"
        gridColumnGap={4}
        zIndex={10}
        bottom={0}
        bg={bg}
        p="16px"
        pb="calc(16px + env(safe-area-inset-bottom))"
        transition="padding-bottom 0.2s ease-in-out"
        borderTopWidth="2px"
        borderTopColor={bgHover}
        width="100%"
      >
        {BUTTONS.map((content) => (
          <Hoverable key={content.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <LinkButtonBasic p={0} bg="transparent" height="auto" to={`/${content.id}`}>
              <Image src={`/${content.id}-app-icon.png`} maxH={16} />
            </LinkButtonBasic>
          </Hoverable>
        ))}
      </Grid>
    </Stack>
  );
};

export default Navigation;
