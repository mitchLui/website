import { useParams } from 'react-router';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { BackButton, Button, Eyebrow, Fact, Facts, LineColor, NewTabHint, PageTitle, ProjectTile, RouteLine, SectionTitle, Station, Stop, Thumbnail, externalLink } from '@mitchlui/components';
import { Project, projects } from '../../data/projects';
import { formatPeriod } from '../../data/dates';
import { rolesFor } from '../../data/roles';
import { imageFor, kindTags } from '../../data/cards';
import { lineFor, previousProject } from '../../data/line';
import { projectHref } from '../../data/links';
import styles from './ProjectDetailsPage.module.css';

const Impact = ({ projectId, line }: { projectId: string; line: LineColor }) =>
  <section className={styles.section}>
    <SectionTitle>Impact</SectionTitle>
    <RouteLine>
      {rolesFor(projectId).map(role =>
        <Station key={role.title + role.started} line={line} kind={role.ended ? 'stop' : 'current'}>
          <Stop period={formatPeriod(role.started, role.ended)} title={role.title}>
            <ul className={styles.impact}>
              {role.impact.map(item => <li key={item}>{item}</li>)}
            </ul>
          </Stop>
        </Station>
      )}
    </RouteLine>
  </section>;

const ProjectFacts = ({ projectId, project }: { projectId: string; project: Project }) => {
  const roles = rolesFor(projectId);
  return (
    <Facts>
      {project.kind === 'professional' && project.team && <Fact term="Team">{project.team}</Fact>}
      <Fact term="Built with">{project.technologies.join(', ')}</Fact>
      {project.kind === 'hackathon' && <Fact term="Event">{project.event}</Fact>}
      {project.awards && <Fact term="Awards">{project.awards.join(' · ')}</Fact>}
      {project.kind === 'academic' && project.grade && <Fact term="Grade">{project.grade}</Fact>}
      {roles.length > 1 && <Fact term="Roles">{roles.map(role => role.title).reverse().join(', ')}</Fact>}
    </Facts>
  );
};

const Previously = ({ projectId }: { projectId: string }) => {
  const previous = previousProject(projectId);
  if (!previous) {
    return null;
  }
  const [id, project] = previous;
  return (
    <nav aria-label="Previous project" className={styles.previously}>
      <ProjectTile href={projectHref(id)} eyebrow={`Previously · ${formatPeriod(project.started, project.ended)}`} title={project.title}/>
    </nav>
  );
};

export const ProjectDetailsPage = () => {
  const { projectId = '' } = useParams();
  const project = projects[projectId];

  if (!project) {
    return <NotFoundPage/>;
  }

  const line = lineFor(projectId, project);

  return (
    <article className={styles.page}>
      <BackButton to="/work/" text="All work"/>
      <header className={styles.header}>
        <Eyebrow line={line}>{project.kind === 'professional' ? '' : `${kindTags[project.kind].label} · `}{formatPeriod(project.started, project.ended)}</Eyebrow>
        <PageTitle>{project.title}</PageTitle>
        <p className={styles.headline}>{project.headline}</p>
      </header>
      <div className={styles.overview}>
        <Thumbnail image={imageFor(project)} priority/>
        <aside className={styles.aside}>
          <ProjectFacts projectId={projectId} project={project}/>
          {(project.website || project.git_url) &&
            <div className={styles.actions}>
              {project.website && <Button as="a" to={project.website} {...externalLink}>Website<NewTabHint/></Button>}
              {project.git_url && <Button as="a" variant="secondary" to={project.git_url} {...externalLink}>GitHub<NewTabHint/></Button>}
            </div>}
        </aside>
      </div>
      {project.kind === 'professional' && <Impact projectId={projectId} line={line}/>}
      {project.content_detailed &&
        <section className={styles.section}>
          <SectionTitle>About</SectionTitle>
          {project.content_detailed.map((paragraph, index) => <p key={index} className={styles.paragraph}>{paragraph}</p>)}
        </section>}
      <Previously projectId={projectId}/>
    </article>
  );
};
