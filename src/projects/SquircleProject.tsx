import { ReactComponent as SquircleAppIcon } from "../images/squircle-app-icon.svg"
import { ReactComponent as SquircleLogo } from "../images/squircle-logo.svg"
import banner from '../images/squircle-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
// Gallery
import imageOne from '../images/squircle-gallery-1.png'
import imageTwo from '../images/squircle-gallery-2.png'
import imageThree from '../images/squircle-gallery-3.png'
import imageFour from '../images/squircle-gallery-4.png'
import imageFive from '../images/squircle-gallery-5.png'

export const SQUIRCLE: Project = {
  id: 'squircle',
  status: ProjectStatus.Production,
  banner,
  bannerAlt: 'Squircle Banner',
  icon: SquircleAppIcon,
  iconSmall: <AppIconSmall Icon={SquircleLogo} />,
  iconMedium: <AppIconMedium Icon={SquircleLogo} />,
  iconLarge: <AppIconLarge Icon={SquircleLogo} />,
  iconAlt: 'Squircle App Icon',
  title: 'Squircle',
  description: 'Create squircles and superellipses with ease',
  date: 'March 2021',
  url: 'https://squircle.club',
  repo: 'https://github.com/scotato/figma-squircle',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive
  ]
}

export default SQUIRCLE
