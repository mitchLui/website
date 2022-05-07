import { React } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProjectsPage } from './pages/ProjectPages/ProjectsPage';
import { ProjectModalPage } from './pages/ProjectPages/ProjectModalPage';
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Copyright } from "./components/Copyright/Copyright";
import { CampaignPage } from './pages/CampaignPage/CampaignPage';
import { SitemapPage } from "./pages/SitemapPage/SitemapPage";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <NavBar/>
        <Routes basename={"/"}>   
          <Route exact path={"/"} element={<HomePage/>}/>
          <Route path={"/projects"} element={<ProjectsPage/>}/>
            <Route path={":projectClass"} element={<ProjectModalPage/>}/>
          <Route path={"/for-css-vp"} element={<CampaignPage/>}/>
          <Route path={"/sitemap"} element={<SitemapPage/>}/>
          <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
        <Copyright/>
      </Router>
    </div>
    
  );
}

export default App;
