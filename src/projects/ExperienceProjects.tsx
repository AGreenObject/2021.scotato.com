import Gnomies from '../projects/GnomiesProject'
import Habanero from '../projects/HabaneroProject'
import Squircle from '../projects/SquircleProject'
import Sleeper from '../projects/SleeperProject'
import { Project } from '../components/Project'
import { Brand } from '../components/Brand'

export const ContractProjects: Project[] = [
  {
    title: "NDA Project",
    summary: "Full stack React and Apollo GraphQL cross device Web Application to monitor and control off grid electrical systems",
    date: "January 2020 - July 2021",
    tools: [Brand.js, Brand.react, Brand.graphql, Brand.nodejs, Brand.sqlite, Brand.figma],
  },
  {
    title: "Viva Health" ,
    summary: "Designed, developed and maintained the Design System for Viva web properties through Cummings Creative Group",
    date: "August 2015 - October 2020",
    tools: [Brand.js, Brand.figma, Brand.csharp, Brand.aspdotnet],
  },
  {
    title: "Prominence Group LLC"  ,
    summary: "Prototyping a Web & Desktop React / Electron app to connect and manage remote devices through a secure websocket bridge",
    date: "March 2015 - January 2017",
    tools: [Brand.js, Brand.react, Brand.nodejs],
  },
  {
    title: "Monroe Electronics"  ,
    summary: "Angular application to configure and control digital alert system hardware used by television stations across the country to broadcast emergency alerts",
    date: "March 2015 - August 2016",
    tools: [Brand.js, Brand.html, Brand.css, Brand.angular],
  },
]

export const FullTimeProjects: Project[] = [
  {
    title: "Whiteboard It",
    date: "October 2014 - June 2015",
    summary: "Web application development, UI/UX development, Front End development, back end development with Node.js, responsive web design",
    tools: [Brand.js, Brand.html, Brand.css, Brand.angular],
  },
  {
    title: "Cummings Creative Group",
    date: "October 2011 - October 2014",
    summary: "Art Direction, Brand Development, Marketing Websites, Web Design, Front End Development, Responsive Web Design, UI/UX",
    tools: [Brand.js, Brand.html, Brand.css],
  },
]

export const IndependentProjects: Project[] = [
  Gnomies,
  Habanero,
  Squircle,
  Sleeper,
  {
    title: "Noodle",
    date: "July 2019",
    summary: "A cross-device iOS/MacOS recipe app built with Swift, SwiftUI and iCloud",
    tools: [Brand.signInWithApple, Brand.swift, Brand.swiftui, Brand.figma],
  },
  {
    title: "Goldilocks.design",
    date: "January 2019",
    summary: "Software Design & Engineering blog using React, Gatsby, GraphQL",
    tools: [Brand.gatsby, Brand.react, Brand.graphql, Brand.nodejs, Brand.figma],
  },
  {
    title: "Mecha",
    date: "March 2018",
    summary: "Tech talk video aggregator using React, Redux, Cloud Firestore",
    tools: [Brand.js, Brand.react, Brand.figma],
  },
  {
    title: "Wavy",
    date: "July 2017",
    summary: "Social Spotify Web client prototype using React, Redux, Cloud Firestore",
    tools: [Brand.js, Brand.react, Brand.nodejs],
  },
  {
    title: "AggBuzz",
    date: "January 2016",
    summary: "Social video wrapper project using React, Redux, and NodeJS",
    tools: [Brand.js, Brand.react, Brand.nodejs],
  },
]
