import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectsPage } from './pages/ProjectPage/ProjectsPage';
import { ProjectModalPage } from './pages/ProjectModalPage/ProjectModalPage';
import { Derrianne } from './pages/Derrianne/Derrianne';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { SitemapPage } from './pages/SitemapPage/SitemapPage';
import { RedirectPage } from './pages/RedirectPage/RedirectPage';

import './App.scss';
import { Container } from './components/Container/Container';

function App (): ReactElement {
  const routes = {
    '/': <HomePage/>,
    '/standing-goose': <Derrianne/>,
    '/projects': <ProjectsPage/>,
    '/projects/:projectClass': <ProjectModalPage/>,
    '/sitemap': <SitemapPage/>,
    '/not-found': <NotFoundPage/>,
    '/linkedin': <RedirectPage redirect={'https://linkedin.com/in/mitchlui'}/>,
    '/github': <RedirectPage redirect={'https://github.com/mitchlui'}/>,
    '/medium': <RedirectPage redirect={'https://mitchlui.medium.com'}/>,
    '/derrianne': <RedirectPage redirect={'/standing-goose'}/>,
    '*': <NotFoundPage/>
  };
  return (
    <div className={'App'}>
      <Router>
        <NavBar/>
        <Routes>
          {
            Object.entries(routes).map(([path, element]) => (
              <Route key={path} path={path} element={<Container>{element}</Container>}/>
            ))
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
