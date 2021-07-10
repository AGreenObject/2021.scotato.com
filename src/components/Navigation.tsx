import { Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as GnomiesLogo } from "../images/gnomies-logo.svg";
import { ReactComponent as HabaneroLogo } from "../images/habanero-logo.svg";
import { ReactComponent as SquircleLogo } from "../images/squircle-logo.svg";
import { ReactComponent as SleeperLogo } from "../images/sleeper-logo.svg";
import { SquircleMask } from "@scotato/react-squircle";
import { LinkButton } from "./Button";

const Navigation = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "black");
  const iconSize = { width: 32, height: 32 }

  return (
    <Stack p={3} spacing={1} direction="column">
      <LinkButton
        leftIcon={
          <SquircleMask p1={2} p2={16}>
            <GnomiesLogo {...iconSize} />
          </SquircleMask>
        }
        justifyContent="flex-start"
        fontWeight={500}
        px={3}
        py={6}
        iconSpacing={3}
        bg={bg}
        _hover={{ bg: bgHover }}
        to="/gnomies"
      >
        Gnomies
      </LinkButton>
      <LinkButton
        leftIcon={
          <SquircleMask p1={2} p2={16}>
            <HabaneroLogo {...iconSize} />
          </SquircleMask>
        }
        to="/habanero"
        justifyContent="flex-start"
        fontWeight={500}
        px={3}
        py={6}
        iconSpacing={3}
        bg={bg}
        _hover={{ bg: bgHover }}
      >
        Habanero
      </LinkButton>
      <LinkButton
        leftIcon={
          <SquircleMask p1={2} p2={16}>
            <SquircleLogo {...iconSize} />
          </SquircleMask>
        }
        to="squircle"
        justifyContent="flex-start"
        fontWeight={500}
        px={3}
        py={6}
        iconSpacing={3}
        bg={bg}
        _hover={{ bg: bgHover }}
      >
        Squircle
      </LinkButton>
      <LinkButton
        leftIcon={
          <SquircleMask p1={2} p2={16}>
            <SleeperLogo {...iconSize} />
          </SquircleMask>
        }
        to="/sleeper"
        justifyContent="flex-start"
        fontWeight={500}
        px={3}
        py={6}
        iconSpacing={3}
        bg={bg}
        _hover={{ bg: bgHover }}
      >
        Sleeper
      </LinkButton>
    </Stack>
  );
};

export default Navigation;
