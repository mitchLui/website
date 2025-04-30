import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage/ProjectDetailsPage';
import { StandingGoose } from './pages/StandingGoose/StandingGoose';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { SitemapPage } from './pages/SitemapPage/SitemapPage';
import { RedirectPage } from './pages/RedirectPage/RedirectPage';

import './App.scss';
import { Container } from './layouts/Container/Container';

function App (): ReactElement {
  const routes = {
    '/': <HomePage/>,
    '/standing-goose': <StandingGoose/>,
    '/projects/:projectId': <ProjectDetailsPage/>,
    '/sitemap': <SitemapPage/>,
    '/not-found': <NotFoundPage/>,
    '/linkedin': <RedirectPage redirect={'https://linkedin.com/in/mitchlui'}/>,
    '/github': <RedirectPage redirect={'https://github.com/mitchlui'}/>,
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
