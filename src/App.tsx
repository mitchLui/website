import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectsPage } from './pages/ProjectPage/ProjectsPage';
import { ProjectModalPage } from './pages/ProjectModalPage/ProjectModalPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Copyright } from './components/Copyright/Copyright';
import { SitemapPage } from './pages/SitemapPage/SitemapPage';
import { RedirectPage } from './pages/RedirectPage/RedirectPage';

import './App.scss';

function App (): React.ReactElement {
  return (
      <div className={'App'}>
        <Router>
          <NavBar/>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/projects'} element={<ProjectsPage/>}/>
            <Route path={'/projects/:projectClass'} element={<ProjectModalPage/>}/>
            <Route path={'/sitemap'} element={<SitemapPage/>}/>
            <Route path={'/not-found'} element={<NotFoundPage/>}/>
            <Route path={'/linkedin'} element={<RedirectPage redirect={'https://linkedin.com/in/mitchlui'}/>}/>
            <Route path={'/github'} element={<RedirectPage redirect={'https://github.com/mitchlui'}/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
          <Copyright/>
        </Router>
      </div>
  );
}

export default App;
