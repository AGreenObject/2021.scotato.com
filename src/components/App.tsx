import Layout from "./Layout";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Navigation from "./Navigation";
import Actions from "./Actions";

function App() {
  return (
    <Layout>
      <Sidebar>
        <Introduction />
        <Navigation />
        <Actions />
      </Sidebar>

      <main />

      <Sidebar />
    </Layout>
  );
}

export default App;
