import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Actions from "./Actions";
import { HomePage, HomeSidebar} from '../pages/Home'
import { GnomiesPage, GnomiesSidebar} from '../pages/Gnomies'
import { HabaneroPage, HabaneroSidebar } from '../pages/Habanero'
import { SquirclePage, SquircleSidebar } from '../pages/Squircle'
import { SleeperPage, SleeperSidebar } from '../pages/Sleeper'

function App() {
  return (
    <Router>
      <Layout>
        <Sidebar>
          <Introduction />
          <Navigation />
          <Actions />
        </Sidebar>

        <Box as="main" p={16}>
          <Switch>
            <Route path="/gnomies" component={GnomiesPage} />
            <Route path="/habanero" component={HabaneroPage} />
            <Route path="/squircle" component={SquirclePage} />
            <Route path="/sleeper" component={SleeperPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Box>

        <Sidebar>
          <Switch>
            <Route path="/gnomies" component={GnomiesSidebar} />
            <Route path="/habanero" component={HabaneroSidebar} />
            <Route path="/squircle" component={SquircleSidebar} />
            <Route path="/sleeper" component={SleeperSidebar} />
            <Route path="/" component={HomeSidebar} />
          </Switch>
        </Sidebar>
      </Layout>
    </Router>
  );
}

export default App;
