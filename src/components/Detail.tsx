import { Box, Grid, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { SquircleMask } from "@scotato/react-squircle";
import { ProjectStatus, colorForStatus, iconForStatus } from './Project'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DetailProps {
  title: string;
  description?: string;
  icon?: JSX.Element;
  iconAlt?: string;
  status?: ProjectStatus
}

const Detail = (props: DetailProps) => {
  const { title, description, icon, status = ProjectStatus.Development } = props
  const bg = useColorModeValue("white", "gray.900");

  return (
    <SquircleMask p1={8} p2={48} style={{display: 'flex'}}>
      <Stack spacing={0} bg={bg} flexGrow={1}>
        <Grid
          p={4}
          gridTemplateColumns={["64px 1fr",  "64px 1fr auto"]}
          gridColumnGap="16px"
          alignItems="center"
        >
          {icon}
          <Grid>
            <Heading fontSize={24}>{title}</Heading>
            <Text lineHeight="1.2">{description}</Text>
          </Grid>
          <Box display={['none', 'block']} color={colorForStatus(status)} fontSize={32} px={4}>
            <FontAwesomeIcon icon={iconForStatus(status)} fixedWidth />
          </Box>
        </Grid>
      </Stack>
    </SquircleMask>
  );
};

export default Detail;
