import { ReactComponent as AppIcon } from "../images/gnomies-logo.svg"
import Card from '../components/Card'
import banner from '../images/gnomies-banner.png'
import { AppIconSmall, AppIconMedium, AppIconLarge } from '../components/AppIcon'

export const GNOMIES = {
  id: 'gnomies',
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
  repo: 'https://github.com/scotato/gnomies'
}

export function GnomiesCard() {
  return (
    <Card
      image={GNOMIES.banner}
      imageAlt={GNOMIES.bannerAlt}
      title={GNOMIES.title}
      description={GNOMIES.description}
      icon={GNOMIES.iconLarge}
      iconAlt={GNOMIES.iconAlt}
    />
  )
}

export function GnomiesPage() {
  return (
    <p>Gnomies</p>
  )
}

export function GnomiesSidebar() {
  return (
    <p>Gnomies</p>
  )
}
