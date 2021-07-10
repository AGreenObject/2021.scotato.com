import { FunctionComponent, SVGProps } from "react"
import { SquircleMask } from "@scotato/react-squircle";

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
