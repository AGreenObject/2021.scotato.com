import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faFigma,
  faEthereum,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <a href="https://github.com/scotato">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://www.figma.com/@scotato">
        <FontAwesomeIcon icon={faFigma} />
      </a>

      <a href="https://twitter.com/scotato">
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a href="https://eth.af/scotato">
        <FontAwesomeIcon icon={faEthereum} />
      </a>
    </>
  );
}

export default App;
