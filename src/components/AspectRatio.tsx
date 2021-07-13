import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

interface AspectRatioProps {
  ratio?: number;
}

const AspectRatio = ({ ratio = 2 / 1, children, ...props }: AspectRatioProps & BoxProps) => {
  const bg = useColorModeValue("gray.200", "gray.700");
  const iconColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
      position="relative"
      display="grid"
      placeItems="center"
      paddingBottom={`${1 / ratio * 100}%`}
      color={iconColor}
      bg={bg}
      width="100%"
      {...props}
    >
      <Box position="absolute">
        {children || <FontAwesomeIcon icon={faImage} size="2x" />}
      </Box>
    </Box>
  );
};

export default AspectRatio;
