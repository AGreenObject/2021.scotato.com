import { Box, BoxProps, Stack, Heading, Text } from "@chakra-ui/react";
import Page from '../components/Page'
import Section from '../components/Section'

interface TopicProps {
  title: string;
  description?: string;
  date: string;
  tools?: Tool[];
}

enum Tool {
  js = "JavaScript",
  react = "React",
  graphql = "GraphQL",
  nodejs = "Node.js",
  figma = "Figma",
  web3 = "Web3"
}

interface TopicToolProps {
  tool: Tool;
}

const Topic = ({ title, description, date, tools = [], ...props }: TopicProps & BoxProps) => {
  return (
    <Box {...props}>
      <Heading fontSize={20} textTransform="uppercase">{title}</Heading>
      <Text fontSize={16} color="gray.500">{date}</Text>
      {description && <Text>{description}</Text>}
      {!!tools.length && <Box>{tools.map(tool => <TopicTool tool={tool} key={tool} />)}</Box>}
    </Box>
  )
}

const TopicTool = ({ tool }: TopicToolProps) => {
  return (
    <Box>
      {/* <Icon /> */}
      <Text>{tool}</Text>
    </Box>
  )
}

export function ExperiencePage() {
  return (
    <Stack p={[8, 12]} spacing={[4, 6]} mx="auto" maxW={960}>
      <Page>
        <Section title="Contract Experience" titleSize={32} spacing={8}>
          <Topic
            title="Ǹ̶̼̓O̸̝͈͐N̸̢̤̅ ̷̛̻̽D̶͔̤͑͝Ï̶̭̪͌S̵̰̮̉C̸̣̣̒̑L̵̘͋̐O̷̠̎S̸͕̟͑Ú̵̗͒͜R̸̮͎͊E̵͇͍͂̂ ̷͖̙̐͊A̸̫͙̍̕Ģ̶͎͌͗R̸̹̼̎Ė̴̺̱͗Ë̶̠́M̸̭͂E̸͖̔̚N̶̢̔͆T̵͇̖̀̈"
            description="Full stack React and Apollo GraphQL cross device Web Application to monitor and control off grid electrical hardware: solar panels, charge controllers, batteries, and inverters"
            date="January 2020 - July 2021"
            // tools={[Tool.js]}
            mt={6}
          />

          <Topic
            title="Viva Health" 
            description="Designing, developing and maintaining the Component Design System for Viva web properties through Cummings Creative Group (C#/.NET)"
            date="August 2015 - October 2020"
          />

          <Topic
            title="Prominence Group LLC"  
            description="Prototyping a Web & Desktop React / Electron app to connect and manage remote devices through a secure websocket / TCP bridge"
            date="March 2015 - January 2017"
          />

          <Topic
            title="Monroe Electronics"  
            description="Angular application to configure and control digital alert system hardware used by television stations across the country to broadcast emergency alerts"
            date="March 2015 - August 2016"
          />
        </Section>
      </Page>

      <Page>
        <Section title="Full Time Experience" titleSize={32} spacing={8}>
          <Topic
            title="Whiteboard It"
            date="October 2014 - June 2015"
            description="Web application development, UI/UX development, Front End development, back end development with Node.js, responsive web design"
          />

          <Topic
            title="Cummings Creative Group"
            date="October 2011 - October 2014"
            description="Art Direction, Brand Development, Marketing Websites, Web Design, Front End Development, Responsive Web Design, UI/UX"
          />
        </Section>
      </Page>

      <Page>
        <Section title="Indie Experience" titleSize={32} spacing={8}>
          <Topic
            title="Gnomies"
            date="March 2021"
            description="Unique collectible NFT avatars powered by Ethereum - Mint, Buy, Sell & Trade unique collectible NFT avatars on Ethereum"
          />
          
          <Topic
            title="Squircle"
            date="January 2021"
            description="A suite of apps makes it easy to create squircles - React, Svelte, NPM, Figma"
          />

          <Topic
            title="Habanero"
            date="January 2020"
            description="Sign in with Apple to save and discover recipes from the web and access from any device - Redwood, React, GraphQL, PostgreSQL, Sign in with Apple, Node.js, Figma"
          />
          
          <Topic
            title="Sleeper"
            date="December 2019"
            description="An animated new tab browser extension for Chrome, Brave, Firefox and Edge - React, Figma"
          />
          
          <Topic
            title="Noodle"
            date="July 2019"
            description="A cross-device iOS/MacOS recipe app built with Swift, SwiftUI and iCloud"
          />

          <Topic
            title="Goldilocks.design"
            date="January 2019"
            description="Software Design & Engineering blog using React, Gatsby, GraphQL"
          />

          <Topic
            title="Mecha"
            date="March 2018"
            description="Tech talk video aggregator using React, Redux, Cloud Firestore"
          />

          <Topic
            title="Wavy"
            date="July 2017"
            description="Social Spotify Web client prototype using React, Redux, Cloud Firestore"
          />

          <Topic
            title="AggBuzz"
            date="January 2016"
            description="Social video wrapper project using React, Redux, and NodeJS"
          />
        </Section>
      </Page>

      <Page>
        <Section title="Education" titleSize={32} spacing={8}>
          <Topic
            title="University of Alabama at Birmingham"
            date="August 2007 - May 2011"
            description="Graduated in May 2011 with a B.A. in Graphic Design. Studied Graphic Design, Art Direction, Typography, Sculpture, & 2D Design."
          />

          <Heading fontSize={32}>Self Directed</Heading>
          <Topic
            title="CodeSchool"
            date="June 2014 - June 2015"
          />
          <Topic
            title="Codecademy"
            date="May 2014 - June 2014 "
          />
          <Topic
            title="Harvard CS50X"
            date="January 2014 - April 2014"
          />
        </Section>
      </Page>
    </Stack>
  )
}
