import { ReactComponent as AppIcon } from "../images/gnomies-logo.svg"
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
  iconSmall: <AppIconSmall Icon={AppIcon} />,
  iconMedium: <AppIconMedium Icon={AppIcon} />,
  iconLarge: <AppIconLarge Icon={AppIcon} />,
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
