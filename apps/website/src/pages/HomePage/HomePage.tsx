import { ReactNode } from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';
import { Button, ProjectTile, RouteLine, SectionTitle, Station, Terminus, Thumbnail, text } from '@mitchlui/components';
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

const Period = ({ children }: { children: string }) =>
  <p className={clsx(text.meta, styles.period)}>{children}</p>;

const Stop = ({ period, title, summary }: { period: string; title: ReactNode; summary: string }) =>
  <div className={styles.stop}>
    <Period>{period}</Period>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.summary}>{summary}</p>
  </div>;

const CurrentRole = ({ role }: { role: Role }) =>
  <div className={styles.current}>
    <div className={styles.copy}>
      <Period>{formatPeriod(role.started, role.ended)}</Period>
      <h3 className={styles.titleCurrent}>{role.title}</h3>
      <p className={styles.team}>Wise · {wiseTeam}</p>
      <p className={styles.summary}>{role.impact[0]}</p>
      <Button as="a" variant="outline" arrow to={projectHref('wise')}>Read more</Button>
    </div>
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
            <Stop period={formatPeriod(role.started, role.ended)} title={role.title} summary={role.impact[0]}/>
          </Station>
        )}
        <Station line="education" kind="interchange">
          <Stop period="Graduated 2023" title="University of Bristol" summary="Coursework, hackathons and side projects."/>
          <ul className={styles.tiles}>
            {educationTiles.map(tile => <li key={tile.href + tile.title}><ProjectTile {...tile}/></li>)}
          </ul>
        </Station>
        {internships.map(([id, project], index) =>
          <Station key={id} line={index === 0 ? 'education' : 'early'} continuesAs="early">
            <Stop
              period={formatPeriod(project.started, project.ended)}
              title={<Link to={projectHref(id)} className={styles.titleLink}>Intern · {project.company}</Link>}
              summary={rolesFor(id)[0].impact[0]}
            />
          </Station>
        )}
        <Terminus><h3 className={styles.title}>Hong Kong</h3></Terminus>
      </RouteLine>
    </section>
  </div>;
