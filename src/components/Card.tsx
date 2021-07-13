import { Box, Grid, Heading, Text, Stack, Image, useColorModeValue } from "@chakra-ui/react";
import { SquircleMask } from "@scotato/react-squircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectStatus } from './Project'
import { AppIconIndicator } from './AppIcon'
import AspectRatio from './AspectRatio'

interface CardProps {
  title: string;
  image?: string;
  imageAlt?: string;
  description?: string;
  icon?: JSX.Element;
  iconAlt?: string;
  status?: ProjectStatus;
}

const Card = (props: CardProps) => {
  const { image, imageAlt, title, description, icon, status } = props
  const bg = useColorModeValue("white", "gray.900");
  const arrowColor = useColorModeValue("gray.200", "gray.700");

  return (
    <SquircleMask p1={8} p2={48} style={{display: 'flex'}}>
      <Stack spacing={0} bg={bg} flexGrow={1}>
        <Image src={image} bg="gray.500" alt={imageAlt} fallback={<AspectRatio />} />
        <Grid
          p={4}
          gridTemplateColumns="64px 1fr auto"
          gridColumnGap="16px"
          alignItems="center"
        >
          <AppIconIndicator status={status ?? ProjectStatus.Development}>
            {icon ?? <></>}
          </AppIconIndicator>
          <Grid>
            <Heading fontSize={24}>{title}</Heading>
            <Text lineHeight="1.2">{description}</Text>
          </Grid>
          <Box display={['none', 'block']} color={arrowColor} fontSize={32} px={4}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Box>
        </Grid>
      </Stack>
    </SquircleMask>
  );
};

export default Card;
