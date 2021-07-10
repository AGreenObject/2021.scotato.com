import { FunctionComponent, SVGProps } from "react"
import { SquircleMask } from "@scotato/react-squircle";
import { ProjectStatus, colorForStatus } from './Project'
import { Box, Circle, useColorModeValue } from "@chakra-ui/react";

interface AppIconSizedProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

interface AppIconProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  width: number;
  height: number;
}

interface AppIconSizeProps {
  width: number;
  height: number;
}

function AppIcon ({ Icon, width = 32, height = 32 }: AppIconProps) {
  return (
    <SquircleMask p1={width / 16} p2={width / 2}>
      {<Icon width={width} height={height} />}
    </SquircleMask>
  )
}

interface AppIconIndicatorProps {
  status: ProjectStatus;
  children: JSX.Element;
}

export function AppIconIndicator ({ status, children }: AppIconIndicatorProps) {
  const borderColor = useColorModeValue('white', 'gray.900')

  return (
    <Box position="relative">
      {children}
      <Circle
        position="absolute"
        bottom={-2}
        right={-2}
        width={6}
        height={6}
        borderWidth={4}
        borderColor={borderColor}
        bg={colorForStatus(status)}
      />
    </Box>
  )
}

export function AppIconSizable ({ Icon }: AppIconSizedProps) {
  return (props: AppIconSizeProps) =>
    <AppIcon Icon={Icon} {...props} />
}

export function AppIconSmall ({ Icon }: AppIconSizedProps) {
  return <AppIcon Icon={Icon} width={16} height={16} />
}

export function AppIconMedium ({ Icon }: AppIconSizedProps) {
  return <AppIcon Icon={Icon} width={32} height={32} />
}

export function AppIconLarge ({ Icon }: AppIconSizedProps) {
  return <AppIcon Icon={Icon} width={64} height={64} />
}

export default AppIcon
