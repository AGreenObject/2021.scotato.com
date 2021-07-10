import { ReactComponent as AppIcon } from "../images/squircle-logo.svg"
import banner from '../images/squircle-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'

export const SQUIRCLE: Project = {
  id: 'squircle',
  status: ProjectStatus.Production,
  banner,
  bannerAlt: 'Squircle Banner',
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
  iconAlt: 'Squircle App Icon',
  title: 'Squircle',
  description: 'Create squircles and superellipses in Figma',
  date: 'March 2021',
  url: 'https://squircle.club',
  repo: 'https://github.com/scotato/figma-squircle',
  gallery: []
}

export default SQUIRCLE
