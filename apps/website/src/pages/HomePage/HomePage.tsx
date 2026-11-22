import { Button, ProjectTile, RouteLine, SectionTitle, Station, Stop, Terminus, TextLink, Thumbnail } from '@mitchlui/components';
import { Intro } from '../../components/Intro/Intro';
import { projects } from '../../data/projects';
import { Role, rolesFor } from '../../data/roles';
import { formatPeriod } from '../../data/dates';
import { imageFor } from '../../data/cards';
import { educationTiles, internships } from '../../data/line';
import { projectHref } from '../../data/links';
import styles from './HomePage.module.css';

const [currentRole, ...earlierRoles] = rolesFor('wise');
const wiseTeam = projects.wise.kind === 'professional' ? projects.wise.team : undefined;

const CurrentRole = ({ role }: { role: Role }) =>
  <div className={styles.current}>
    <Stop current period={formatPeriod(role.started, role.ended)} title={role.title} className={styles.measure}>
      <p className={styles.team}>Wise · {wiseTeam}</p>
      <p>{role.impact[0]}</p>
      <Button as="a" variant="outline" arrow to={projectHref('wise')}>Read more</Button>
    </Stop>
    <Thumbnail image={imageFor(projects.wise)}/>
  </div>;

export const HomePage = () =>
  <div className={styles.page}>
    <Intro/>
    <section aria-labelledby="experience" className={styles.experience}>
      <SectionTitle id="experience">Experience</SectionTitle>
      <RouteLine>
        <Station line="wise" kind="current">
          <CurrentRole role={currentRole}/>
        </Station>
        {earlierRoles.map((role, index) =>
          <Station key={role.started} line="wise" continuesAs={index === earlierRoles.length - 1 ? 'education' : 'wise'}>
            <Stop period={formatPeriod(role.started, role.ended)} title={role.title} className={styles.measure}><p>{role.impact[0]}</p></Stop>
          </Station>
        )}
        <Station line="education" kind="interchange">
          <Stop period="Graduated 2023" title="University of Bristol" className={styles.measure}><p>Coursework, hackathons and side projects.</p></Stop>
          <ul className={styles.tiles}>
            {educationTiles.map(tile => <li key={tile.href + tile.title}><ProjectTile {...tile}/></li>)}
          </ul>
        </Station>
        {internships.map(([id, project], index) =>
          <Station key={id} line={index === 0 ? 'education' : 'early'} continuesAs="early">
            <Stop
              period={formatPeriod(project.started, project.ended)}
              title={<TextLink quiet to={projectHref(id)}>Intern · {project.company}</TextLink>}
              className={styles.measure}
            >
              <p>{rolesFor(id)[0].impact[0]}</p>
            </Stop>
          </Station>
        )}
        <Terminus><h3 className={styles.terminus}>Hong Kong</h3></Terminus>
      </RouteLine>
    </section>
  </div>;
