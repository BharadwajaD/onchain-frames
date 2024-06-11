import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Data from "./pages/Data";
import Frame from "./pages/Frame";

function App() {

    return (
        <Router>
        <Routes>

        <Route path="/data" element = <Data /> />
        <Route path="/frame" element = <Frame /> />

        </Routes>
        </Router>
    );
}

export default App;
