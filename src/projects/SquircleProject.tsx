import { ReactComponent as SquircleAppIcon } from "../images/squircle-app-icon.svg"
import { ReactComponent as SquircleLogo } from "../images/squircle-logo.svg"
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
import { Brand } from '../components/Brand'
import banner from '../images/squircle-banner.png'
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
  summary: 'This suite of apps makes it easy to create the mathemagical squircle. Say goodbye to rounded rectangles.',
  date: 'January 2021',
  url: 'https://squircle.club',
  repo: 'https://github.com/scotato/figma-squircle',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive
  ],
  tools: [
    Brand.react,
    Brand.svelte,
    Brand.npm,
    Brand.figma,
  ],
  resources: [
    { brand: Brand.squircle, url: 'https://squircle.club', text: 'Web App' },
    { brand: Brand.figma, url: 'https://www.figma.com/community/plugin/930173909910797614/Squircle', text: 'Figma Plugin' },
    { brand: Brand.npm, url: 'http://npmjs.com/package/@scotato/react-squircle', text: 'React Package' },
    { brand: Brand.github, url: 'https://github.com/scotato/club-squircle', text: 'App Source Code' },
    { brand: Brand.github, url: 'https://github.com/scotato/figma-squircle', text: 'Plugin Source Code' },
    { brand: Brand.github, url: 'https://github.com/scotato/react-squircle', text: 'Package Source Code' },
  ]
}

export default SQUIRCLE
