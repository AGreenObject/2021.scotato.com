import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Actions from "./Actions";
import About from "./About";

function App() {
  return (
    <Layout>
      <Sidebar>
        <Introduction />
        <Navigation />
        <Actions />
      </Sidebar>

      <main />

      <Sidebar>
        <About />
      </Sidebar>
    </Layout>
  );
}

export default App;
