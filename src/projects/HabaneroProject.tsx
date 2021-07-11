import { ReactComponent as HabaneroAppIcon } from "../images/habanero-app-icon.svg"
import { ReactComponent as HabaneroLogo } from "../images/habanero-logo.svg"
import banner from '../images/habanero-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
// Gallery
import imageOne from '../images/habanero-gallery-1.png'
import imageTwo from '../images/habanero-gallery-2.png'
import imageThree from '../images/habanero-gallery-3.png'
import imageFour from '../images/habanero-gallery-4.png'
import imageFive from '../images/habanero-gallery-5.png'

export const HABANERO: Project = {
  id: 'habanero',
  status: ProjectStatus.Hold,
  banner,
  bannerAlt: 'Habanero Banner',
  icon: HabaneroAppIcon,
  iconSmall: <AppIconSmall Icon={HabaneroLogo} />,
  iconMedium: <AppIconMedium Icon={HabaneroLogo} />,
  iconLarge: <AppIconLarge Icon={HabaneroLogo} />,
  iconAlt: 'Habanero App Icon',
  title: 'Habanero',
  description: 'Discover and collect recipes from the web',
  date: 'March 2021',
  url: 'https://habanero.red',
  repo: 'https://github.com/scotato/habanero',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
  ]
}

export default HABANERO
