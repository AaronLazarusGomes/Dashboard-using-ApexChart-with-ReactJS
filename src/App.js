import "./App.css";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainPage />
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
