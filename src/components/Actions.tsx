import {
  Stack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faEthereum
} from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun
} from "@fortawesome/free-solid-svg-icons";


const MoonIcon = () => <FontAwesomeIcon icon={faMoon} />
const SunIcon = () => <FontAwesomeIcon icon={faSun} />

export const Actions = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const colorModeLabel = useColorModeValue("Dark Mode", "Light Mode");
  const bg = useColorModeValue("white", "gray.900");
  const bgHover = useColorModeValue("gray.100", "black");
  const color = useColorModeValue("gray.300", "gray.600");

  return (
    <Stack
      p={6}
      spacing={2}
      direction="row"
      justifyContent="center"
      color={color}
      sx={{ path: { fill: "currentColor" } }}
      mt="auto"
    >
      <IconButton
        aria-label={colorModeLabel}
        icon={colorModeIcon}
        onClick={toggleColorMode}
        bg={bg}
        _hover={{ bg: bgHover }}
        fontSize="20px"
      />
      <IconButton
        as="a"
        href="https://github.com/scotato"
        target="_blank"
        aria-label="GitHub"
        icon={<FontAwesomeIcon icon={faGithub} />}
        bg={bg}
        _hover={{ bg: bgHover }}
        fontSize="22px"
      />
      <IconButton
        as="a"
        href="https://twitter.com/scotato"
        target="_blank"
        aria-label="Twitter"
        icon={<FontAwesomeIcon icon={faTwitter} />}
        bg={bg}
        _hover={{ bg: bgHover }}
        fontSize="22px"
      />
      <IconButton
        as="a"
        href="https://rainbow.me/scotato.eth"
        target="_blank"
        aria-label="Ethereum"
        icon={<FontAwesomeIcon icon={faEthereum} />}
        bg={bg}
        _hover={{ bg: bgHover }}
        fontSize="22px"
      />
    </Stack>
  );
};

export default Actions;
