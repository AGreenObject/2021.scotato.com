import { ReactComponent as HabaneroAppIcon } from "../images/habanero-app-icon.svg"
import { ReactComponent as HabaneroLogo } from "../images/habanero-logo.svg"
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
import { Brand } from '../components/Brand'
import banner from '../images/habanero-banner.png'
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
  summary: 'Sign in with Apple to save and discover recipes from the web and access from any device',
  date: 'January 2020',
  url: 'https://habanero.red',
  repo: 'https://github.com/scotato/habanero',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
  ],
  tools: [
    Brand.redwood,
    Brand.react,
    Brand.graphql,
    Brand.postgresql,
    Brand.signInWithApple,
    Brand.nodejs,
    Brand.figma,
  ],
  resources: [
    { brand: Brand.habanero, url: 'https://habanero.red', text: 'Web App' },
    { brand: Brand.github, url: 'https://github.com/scotato/habanero', text: 'Source Code' },
  ]
}

export default HABANERO
