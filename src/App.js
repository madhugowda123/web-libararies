import "./App.css";
import "semantic-ui-css/semantic.min.css";
import FullWidthTabs from "./navbar/Navbar";
import { Notifications } from "react-push-notification";

function App() {
  return (
    <div className="App">
      <Notifications />
      <FullWidthTabs />
    </div>
  );
}

export default App;
