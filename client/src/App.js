import { React, useEffect } from 'react';
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectsPage } from './pages/ProjectPages/ProjectsPage';
import { ProjectModalPage } from './pages/ProjectModalPage/ProjectModalPage';
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Copyright } from "./components/Copyright/Copyright";
import { SitemapPage } from "./pages/SitemapPage/SitemapPage";
import { RedirectPage } from './pages/RedirectPage/RedirectPage';
import { setTitle, setDescription, setOgProperties } from './meta/meta';

function App() {

  useEffect(() => {
    setTitle("Mitch Lui | Full Stack Developer");
    setDescription("mitchlui.dev");
    setOgProperties({
      title: "Mitch Lui | Full Stack Developer",
      description: "mitchlui.dev",    
    })
  }, []);

  return (
      <div className={"App"}>
        <Router>
          <NavBar/>
          <Routes basename={"/"}>   
            <Route exact path={"/"} element={<HomePage/>}/>
            <Route path={"/projects"} element={<ProjectsPage/>}/>
            <Route path={"/projects/:projectClass"} element={<ProjectModalPage/>}/>
            <Route path={"/sitemap"} element={<SitemapPage/>}/>
            <Route path={"/not-found"} element={<NotFoundPage/>}/>
            <Route path={"/linkedin"} element={<RedirectPage redirect={"https://linkedin.com/in/mitchlui"}/>}/>
            <Route path={"/github"} element={<RedirectPage redirect={"https://github.com/mitchlui"}/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
          </Routes>
          <Copyright/>
        </Router>
      </div>
  );
}

export default App;
