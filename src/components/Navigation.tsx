import { Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as ReactLogo } from "../images/react-logo.svg";
import { LinkButton } from "./Button";

const Navigation = () => {
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "black");

  return (
    <Stack p={4} spacing={2} direction="column">
      <LinkButton
        leftIcon={<FigmaLogo width={24} height={24} />}
        justifyContent="flex-start"
        fontWeight={400}
        px={3}
        height={10}
        bg={bg}
        _hover={{ bg: bgHover }}
        to="/gnomies"
      >
        Gnomies
      </LinkButton>
      <LinkButton
        leftIcon={<ReactLogo width={24} height={24} />}
        to="/habanero"
        justifyContent="flex-start"
        fontWeight={400}
        px={3}
        bg={bg}
        _hover={{ bg: bgHover }}
        height={10}
      >
        Habanero
      </LinkButton>
      <LinkButton
        leftIcon={<ReactLogo width={24} height={24} />}
        to="squircle"
        justifyContent="flex-start"
        fontWeight={400}
        px={3}
        bg={bg}
        _hover={{ bg: bgHover }}
        height={10}
      >
        Squircle
      </LinkButton>
      <LinkButton
        leftIcon={<ReactLogo width={24} height={24} />}
        to="/sleeper"
        justifyContent="flex-start"
        fontWeight={400}
        px={3}
        bg={bg}
        _hover={{ bg: bgHover }}
        height={10}
      >
        Sleeper
      </LinkButton>
    </Stack>
  );
};

export default Navigation;
