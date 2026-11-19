import { Link } from 'react-router';
import { Button, ProjectTile, RouteLine, SectionTitle, Station, Terminus, Thumbnail, text } from '@mitchlui/components';
import clsx from 'clsx';
import { Intro } from '../../components/Intro/Intro';
import { projects } from '../../data/projects';
import { rolesFor } from '../../data/roles';
import { formatPeriod } from '../../data/dates';
import { imageFor } from '../../data/cards';
import { educationTiles, internships } from '../../data/line';
import styles from './HomePage.module.css';

const wiseRoles = rolesFor('wise');
const wiseTeam = projects.wise.kind === 'professional' ? projects.wise.team : undefined;

export const HomePage = () =>
  <div className={styles.page}>
    <Intro/>
    <section aria-labelledby="experience" className={styles.experience}>
      <SectionTitle id="experience">Experience</SectionTitle>
      <RouteLine>
        {wiseRoles.map((role, index) =>
          <Station
            key={role.started}
            line="wise"
            continuesAs={index === wiseRoles.length - 1 ? 'education' : 'wise'}
            kind={index === 0 ? 'current' : 'stop'}
          >
            <div className={index === 0 ? styles.current : styles.stop}>
              <div className={styles.copy}>
                <p className={clsx(text.meta, styles.period)}>{formatPeriod(role.started, role.ended)}</p>
                <h3 className={index === 0 ? styles.titleCurrent : styles.title}>{role.title}</h3>
                {index === 0 && <p className={styles.team}>Wise · {wiseTeam}</p>}
                <p className={styles.summary}>{role.impact[0]}</p>
                {index === 0 && <Button as="a" variant="outline" arrow to="/work/wise">Read more</Button>}
              </div>
              {index === 0 && <Thumbnail image={imageFor(projects.wise)}/>}
            </div>
          </Station>
        )}
        <Station line="education" kind="interchange">
          <div className={styles.stop}>
            <p className={clsx(text.meta, styles.period)}>Graduated 2023</p>
            <h3 className={styles.title}>University of Bristol</h3>
            <p className={styles.summary}>Coursework, hackathons and side projects.</p>
          </div>
          <ul className={styles.tiles}>
            {educationTiles.map(tile => <li key={tile.href + tile.title}><ProjectTile {...tile}/></li>)}
          </ul>
        </Station>
        {internships.map(([id, project], index) => {
          const [role] = rolesFor(id);
          return (
            <Station key={id} line={index === 0 ? 'education' : 'early'} continuesAs="early">
              <div className={styles.stop}>
                <p className={clsx(text.meta, styles.period)}>{formatPeriod(project.started, project.ended)}</p>
                <h3 className={styles.title}><Link to={`/work/${id}`} className={styles.titleLink}>Intern · {project.title.split(' – ')[0]}</Link></h3>
                <p className={styles.summary}>{role.impact[0]}</p>
              </div>
            </Station>
          );
        })}
        <Terminus><h3 className={styles.title}>Hong Kong</h3></Terminus>
      </RouteLine>
    </section>
  </div>;
