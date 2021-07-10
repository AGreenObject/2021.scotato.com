import { ReactComponent as AppIcon } from "../images/habanero-logo.svg"
import banner from '../images/habanero-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'

export const HABANERO: Project = {
  id: 'habanero',
  status: ProjectStatus.Hold,
  banner,
  bannerAlt: 'Habanero Banner',
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
  iconAlt: 'Habanero App Icon',
  title: 'Habanero',
  description: 'Discover and collect recipes from the web',
  date: 'March 2021',
  url: 'https://habanero.red',
  repo: 'https://github.com/scotato/habanero',
  gallery: []
}

export default HABANERO
