import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Intro } from "./components/Intro/Intro";
import { Projects } from "./components/Projects/Projects";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <NavBar/>
        <Routes basename={"/"}>   
          <Route exact path={"/"} element={<Intro />}/>
          <Route path={"/projects"} element={<Projects />}/>
          <Route path={"*"} element={<NotFound />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
