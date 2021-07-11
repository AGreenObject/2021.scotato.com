import { ReactComponent as SleeperAppIcon } from "../images/sleeper-app-icon.svg"
import { ReactComponent as SleeperLogo } from "../images/sleeper-logo.svg"
import banner from '../images/sleeper-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
// Gallery
import imageOne from '../images/sleeper-gallery-1.png'
import imageTwo from '../images/sleeper-gallery-2.png'
import imageThree from '../images/sleeper-gallery-3.png'
import imageFour from '../images/sleeper-gallery-4.png'
import imageFive from '../images/sleeper-gallery-5.png'

export const SLEEPER: Project = {
  id: 'sleeper',
  status: ProjectStatus.Production,
  banner,
  bannerAlt: 'Sleeper Banner',
  icon: SleeperAppIcon,
  iconSmall: <AppIconSmall Icon={SleeperLogo} />,
  iconMedium: <AppIconMedium Icon={SleeperLogo} />,
  iconLarge: <AppIconLarge Icon={SleeperLogo} />,
  iconAlt: 'Sleeper App Icon',
  title: 'Sleeper',
  description: 'An ambient new tab browser extension',
  date: 'March 2021',
  url: 'https://sleeper.fyi',
  repo: 'https://github.com/scotato/sleeper',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
  ]
}

export default SLEEPER
