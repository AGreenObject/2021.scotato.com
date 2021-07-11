import { ReactComponent as GnomiesAppIcon } from "../images/gnomies-app-icon.svg"
import { ReactComponent as GnomiesLogo } from "../images/gnomies-logo.svg"
import banner from '../images/gnomies-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
// Gallery
import imageOne from '../images/gnomies-gallery-1.png'
import imageTwo from '../images/gnomies-gallery-2.png'
import imageThree from '../images/gnomies-gallery-3.png'
import imageFour from '../images/gnomies-gallery-4.png'
import imageFive from '../images/gnomies-gallery-5.png'

const GNOMIES: Project = {
  id: 'gnomies',
  status: ProjectStatus.Development,
  banner,
  bannerAlt: 'Gnomies Banner',
  icon: GnomiesAppIcon,
  iconSmall: <AppIconSmall Icon={GnomiesLogo} />,
  iconMedium: <AppIconMedium Icon={GnomiesLogo} />,
  iconLarge: <AppIconLarge Icon={GnomiesLogo} />,
  iconAlt: 'Gnomies App Icon',
  title: 'Gnomies',
  description: 'Unique collectible NFT avatars powered by Ethereum',
  date: 'March 2021',
  url: 'https://gnomies.app',
  repo: 'https://github.com/scotato/gnomies',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
  ]
}

export default GNOMIES
