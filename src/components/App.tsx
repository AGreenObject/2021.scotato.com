import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import CreatorDetails from "./CreatorDetails";
import Navigation from "./Navigation";
import Actions from "./Actions";
import ScrollToTop from "./ScrollToTop";
import { HomePage, HomeSidebar} from '../pages/Home'
import { GnomiesPage, GnomiesSidebar} from '../pages/Gnomies'
import { HabaneroPage, HabaneroSidebar } from '../pages/Habanero'
import { SquirclePage, SquircleSidebar } from '../pages/Squircle'
import { SleeperPage, SleeperSidebar } from '../pages/Sleeper'
import { ExperiencePage } from '../pages/Experience'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Sidebar>
          <CreatorDetails />
          <Navigation />
          <Actions display={['none', 'flex']} />
        </Sidebar>

        <Main>
          <Switch>
            <Route path="/gnomies" component={GnomiesPage} />
            <Route path="/habanero" component={HabaneroPage} />
            <Route path="/squircle" component={SquirclePage} />
            <Route path="/sleeper" component={SleeperPage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Main>

        <Sidebar>
          <Switch>
            <Route path="/gnomies" component={GnomiesSidebar} />
            <Route path="/habanero" component={HabaneroSidebar} />
            <Route path="/squircle" component={SquircleSidebar} />
            <Route path="/sleeper" component={SleeperSidebar} />
            <Route path="/experience" component={HomeSidebar} />
            <Route path="/" component={HomeSidebar} />
          </Switch>
          <Actions display={['flex', 'none']} />
        </Sidebar>
      </Layout>
    </Router>
  );
}

function Main (props: BoxProps) {
  const bg = useColorModeValue("gray.100", "gray.800");
  
  return (
    <Box as="main" bg={bg} {...props} />
  )
}

export default App;
