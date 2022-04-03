import { React } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Intro } from "./components/Intro/Intro";
import { Projects, ProjectModalPage } from "./components/Projects/Projects";
import { NotFound } from "./components/NotFound/NotFound";
import { Copyright } from "./components/Copyright/Copyright";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <NavBar/>
        <Routes basename={"/"}>   
          <Route exact path={"/"} element={<Intro />}/>
          <Route path={"/projects"} element={<Projects />}/>
            <Route path={":projectClass"} element={<ProjectModalPage/>}/>
          <Route path={"*"} element={<NotFound />}/>
        </Routes>
      </Router>
      <Copyright/>
    </div>
    
  );
}

export default App;
