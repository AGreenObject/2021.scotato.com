import { Icon, ListIcon, useColorModeValue } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNodeJs, faGithub, faNpm, faApple } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as GraphqlLogo } from "../images/graphql-logo.svg";
import { ReactComponent as FigmaLogo } from "../images/figma-logo.svg";
import { ReactComponent as EthereumLogo } from "../images/ethereum-logo.svg";
import { ReactComponent as RedwoodLogo } from "../images/redwood-logo.svg";
import { ReactComponent as SvelteLogo } from "../images/svelte-logo.svg";
import { ReactComponent as AngularLogo } from "../images/angular-logo.svg";
import { ReactComponent as GatsbyLogo } from "../images/gatsby-logo.svg";
import { ReactComponent as PostgreSQLLogo } from "../images/postgresql-logo.svg";
import { ReactComponent as SQLiteLogo } from "../images/sqlite-logo.svg";
import { ReactComponent as AspDotNetLogo } from "../images/aspdotnet-logo.svg";
import { ReactComponent as CLogo } from "../images/c-logo.svg";
import { ReactComponent as CSharpLogo } from "../images/csharp-logo.svg";
import { ReactComponent as HTMLLogo } from "../images/html-logo.svg";
import { ReactComponent as CSSLogo } from "../images/css-logo.svg";
import { ReactComponent as SwiftLogo } from "../images/swift-logo.svg";
import { ReactComponent as SwiftUILogo } from "../images/swiftui-logo.svg";
import { ReactComponent as ChromeLogo } from '../images/chrome-logo.svg'
import { ReactComponent as FirefoxLogo } from '../images/firefox-logo.svg'
import { ReactComponent as EdgeLogo } from '../images/edge-logo.svg'
import { ReactComponent as GnomiesLogo } from "../images/gnomies-app-icon.svg"
import { ReactComponent as HabaneroLogo } from "../images/habanero-app-icon.svg"
import { ReactComponent as SquircleLogo } from "../images/squircle-app-icon.svg"
import { ReactComponent as SleeperLogo } from "../images/sleeper-app-icon.svg"

export enum Brand {
  js = "JavaScript",
  react = "React",
  svelte = "Svelte",
  angular = "Angular",
  gatsby = "Gatsby",
  redwood = "Redwood",
  graphql = "GraphQL",
  postgresql = "PostgreSQL",
  sqlite = "SQLiteLogo",
  aspdotnet = "ASP.Net",
  c = "C",
  csharp = "C#",
  html = "HTML",
  css = "CSS",
  swift = "Swift",
  swiftui = "SwiftUI",
  signInWithApple = "Sign in with Apple",
  nodejs = "Node.js",
  npm = "NPM",
  figma = "Figma",
  web3 = "Web3",
  github = "GitHub",
  chrome = "Chrome",
  firefox = "Firefox",
  edge = "Edge",
  gnomies = "Gnomies",
  habanero = "Habanero",
  squircle = "Squircle",
  sleeper = "Sleeper"
}

const FontAwesomeIcons = [
  Brand.js,
  Brand.react,
  Brand.signInWithApple,
  Brand.nodejs,
  Brand.npm,
  Brand.github
]

function getFontIcon (brand: Brand) {
  switch (brand) {
    case Brand.js:
      return faJs
    case Brand.react:
      return faReact
    case Brand.signInWithApple:
      return faApple
    case Brand.nodejs:
      return faNodeJs
    case Brand.npm:
      return faNpm
    case Brand.github:
      return faGithub
    default:
      return faJs
  }
}

function getSvgIcon (brand: Brand) {
  switch (brand) {
    case Brand.redwood:
      return RedwoodLogo
    case Brand.svelte:
      return SvelteLogo
    case Brand.angular:
      return AngularLogo
    case Brand.gatsby:
      return GatsbyLogo
    case Brand.graphql:
      return GraphqlLogo
    case Brand.postgresql:
      return PostgreSQLLogo
    case Brand.sqlite:
      return SQLiteLogo
    case Brand.aspdotnet:
      return AspDotNetLogo
    case Brand.c:
      return CLogo
    case Brand.csharp:
      return CSharpLogo
    case Brand.html:
      return HTMLLogo
    case Brand.css:
      return CSSLogo
    case Brand.swift:
      return SwiftLogo
    case Brand.swiftui:
      return SwiftUILogo
    case Brand.figma:
      return FigmaLogo
    case Brand.web3:
      return EthereumLogo
    case Brand.chrome:
      return ChromeLogo
    case Brand.firefox:
      return FirefoxLogo
    case Brand.edge:
      return EdgeLogo
    case Brand.gnomies:
      return GnomiesLogo
    case Brand.habanero:
      return HabaneroLogo
    case Brand.squircle:
      return SquircleLogo
    case Brand.sleeper:
      return SleeperLogo
  }
}

function getFontIconColor (brand: Brand) {
  switch (brand) {
    case Brand.react:
      return 'blue.400'
    case Brand.js:
      return 'yellow.400'
    case Brand.npm:
      return 'red.400'
    case Brand.nodejs:
      return 'green.400'
  }
}

export function BrandIcon ({ brand }: { brand: Brand }) {
  const isFontAwesomeIcon = FontAwesomeIcons.includes(brand)
  const darkModeColor = useColorModeValue("gray.900", "gray.100")

  if (isFontAwesomeIcon) return (
    <Icon
      as={FontAwesomeIcon} 
      icon={getFontIcon(brand)} 
      color={getFontIconColor(brand) ?? darkModeColor}
      title={brand}
      fontSize={20} 
      fixedWidth 
    />
  )

  return (
    <Icon as={getSvgIcon(brand)} title={brand} fontSize={20} width="25px" height="20px" />
  )
}

export function BrandListIcon ({ brand }: { brand: Brand }) {
  const isFontAwesomeIcon = FontAwesomeIcons.includes(brand)
  const darkModeColor = useColorModeValue("gray.900", "gray.100")

  if (isFontAwesomeIcon) return (
    <ListIcon
      as={FontAwesomeIcon} 
      icon={getFontIcon(brand)} 
      color={getFontIconColor(brand) ?? darkModeColor}
      fontSize={20} 
      fixedWidth 
    />
  )

  return (
    <ListIcon as={getSvgIcon(brand)} fontSize={20} width="25px" height="20px" />
  )
}
