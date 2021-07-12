import { ReactComponent as SleeperAppIcon } from "../images/sleeper-app-icon.svg"
import { ReactComponent as SleeperLogo } from "../images/sleeper-logo.svg"
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'
import { Project, ProjectStatus } from '../components/Project'
import { Brand } from '../components/Brand'
import banner from '../images/sleeper-banner.png'
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
  summary: 'An animated new tab browser extension for Chrome, Brave, Firefox and Edge',
  date: 'December 2019',
  url: 'https://sleeper.fyi',
  repo: 'https://github.com/scotato/sleeper',
  gallery: [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
  ],
  tools: [
    Brand.react,
    Brand.figma,
  ],
  resources: [
    { brand: Brand.sleeper, url: 'https://sleeper.fyi', text: 'Website' },
    { brand: Brand.github, url: 'https://github.com/scotato/sleeper', text: 'Source Code' },
    { brand: Brand.chrome, url: 'https://chrome.google.com/webstore/detail/sleeper/njihjodgjnlpkoipodopnchepnpoogdi', text: 'Chrome Plugin' },
    { brand: Brand.firefox, url: 'https://addons.mozilla.org/en-US/firefox/addon/sleeper', text: 'Firefox Plugin' },
    { brand: Brand.edge, url: 'https://microsoftedge.microsoft.com/addons/detail/gdihfmeehghdcheocnakekjegoaiphlo', text: 'Edge Plugin' },
  ]
}

export default SLEEPER
