import Gnomies from '../projects/GnomiesProject'
import Habanero from '../projects/HabaneroProject'
import Squircle from '../projects/SquircleProject'
import Sleeper from '../projects/SleeperProject'
import { Project } from '../components/Project'
import { Brand } from '../components/Brand'

export const ContractProjects: Project[] = [
  {
    title: "NDA Project",
    summary: "Designed and built a full stack cross device web application with React and Apollo GraphQL to monitor and control off grid electrical systems",
    date: "January 2020 - July 2021",
    tools: [Brand.react, Brand.graphql, Brand.nodejs, Brand.sqlite, Brand.figma],
  },
  {
    title: "Viva Health" ,
    summary: "Designed, developed and maintained the Design System for Viva Health web properties including 508/HIPAA compliant marketing websites and Medicare enrollment web applications through Cummings Creative Group",
    date: "August 2015 - October 2020",
    tools: [Brand.js, Brand.figma, Brand.csharp, Brand.aspdotnet],
  },
  {
    title: "Prominence Group LLC"  ,
    summary: "Prototyped a web & desktop React / Electron application to connect and manage remote devices through a secure websocket bridge",
    date: "March 2015 - January 2017",
    tools: [Brand.react, Brand.nodejs],
  },
  {
    title: "Monroe Electronics"  ,
    summary: "Designed and built an Angular application to configure and control digital alert system hardware used by television stations across the country to broadcast emergency alerts through Prominence Group",
    date: "March 2015 - August 2016",
    tools: [Brand.angular, Brand.html, Brand.css],
  },
]

export const FullTimeProjects: Project[] = [
  {
    title: "Whiteboard It",
    date: "October 2014 - June 2015",
    summary: "Designed and developed full stack responsive web applications with custom UI frameworks and Node.js",
    tools: [Brand.angular, Brand.html, Brand.css],
  },
  {
    title: "Cummings Creative Group",
    date: "October 2011 - October 2014",
    summary: "Responsible for art direction, brand development, and marketing website design and development specializing in responsive front end UI/UX",
    tools: [Brand.js, Brand.html, Brand.css],
  },
]

export const IndependentProjects: Project[] = [
  { ...Gnomies, summary: "Designed and built a full stack decentralized web application to mint and exchange unique avatar NFTs" },
  { ...Habanero, summary: "Designed and built a full stack web application to collect online recipes with Redwood, Node.js and Sign in with Apple" },
  { ...Squircle, summary: "Designed and built a suite of apps including a Figma Plugin, Web App, and NPM package to create and edit squircles" },
  { ...Sleeper, summary: "Designed and built an ambient new tab browser extension with animated SVGs for Chrome, Firefox and Edge" },
  {
    title: "Noodle",
    date: "July 2019",
    summary: "Designed and built a cross-device iOS/MacOS recipe app built with Swift, SwiftUI and iCloud",
    tools: [Brand.signInWithApple, Brand.swift, Brand.swiftui, Brand.figma],
  },
  {
    title: "Goldilocks.design",
    date: "January 2019",
    summary: "Designed and built a software design & engineering blog using React, Gatsby, GraphQL",
    tools: [Brand.gatsby, Brand.react, Brand.graphql, Brand.nodejs, Brand.figma],
  },
  {
    title: "Mecha",
    date: "March 2018",
    summary: "Designed and built a tech talk video aggregator using React, Redux, Cloud Firestore",
    tools: [Brand.react, Brand.figma],
  },
  {
    title: "Wavy",
    date: "July 2017",
    summary: "Designed and built a social Spotify web client prototype using React, Redux, Cloud Firestore",
    tools: [Brand.react, Brand.nodejs],
  },
  {
    title: "AggBuzz",
    date: "January 2016",
    summary: "Designed and built a social video wrapper that allowed users to comment and react to specific video moments using React, Redux, and NodeJS",
    tools: [Brand.react, Brand.nodejs],
  },
]

export const EducationProjects: Project[] = [
  {
    title: "University of Alabama at Birmingham",
    date: "August 2007 - May 2011",
    summary: "Graduated in May 2011 with a B.A. in Graphic Design. Studied Graphic Design, Art Direction, Typography, Sculpture, & 2D Design",
  },
  {
    title: "CodeSchool",
    date: "June 2014 - June 2015",
    summary: "Online advanced courses for JavaScript & Web Development covering closures, hoisting, functional programming, DOM events and progressive Web Apps",
    tools: [Brand.js, Brand.html, Brand.css],
  },
  {
    title: "Codecademy",
    date: "May 2014 - June 2014",
    summary: "Online courses for JavaScript & PHP covering data structures, functions, loops, control flow, events and APIs",
    tools: [Brand.js, Brand.html, Brand.css],
  },
  {
    title: "Harvard CS50X",
    date: "January 2014 - April 2014",
    summary: "Online introduction to computer science and the art of programming covering abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web programming",
    tools: [Brand.c, Brand.js, Brand.html, Brand.css],
  }
]
