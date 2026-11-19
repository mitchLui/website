import { PropsWithChildren } from 'react';
import { useParams } from 'react-router';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { BackButton, Button, LineColor, LineMarker, PageTitle, ProjectTile, RouteLine, SectionTitle, Station, Thumbnail, externalLink, text } from '@mitchlui/components';
import clsx from 'clsx';
import { Project, projects } from '../../data/projects';
import { formatPeriod } from '../../data/dates';
import { rolesFor } from '../../data/roles';
import { imageFor, kindTags } from '../../data/cards';
import { lineFor, previousProject } from '../../data/line';
import styles from './ProjectDetailsPage.module.css';

const Impact = ({ projectId, line }: { projectId: string; line: LineColor }) =>
  <section className={styles.section}>
    <SectionTitle>Impact</SectionTitle>
    <RouteLine>
      {rolesFor(projectId).map(role =>
        <Station key={role.title + role.started} line={line} kind={role.ended ? 'stop' : 'current'}>
          <div className={styles.role}>
            <p className={clsx(text.meta, styles.rolePeriod)}>{formatPeriod(role.started, role.ended)}</p>
            <h3>{role.title}</h3>
            <ul className={styles.impact}>
              {role.impact.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </Station>
      )}
    </RouteLine>
  </section>;

const Fact = ({ term, children }: PropsWithChildren<{ term: string }>) =>
  <div className={styles.fact}>
    <dt>{term}</dt>
    <dd>{children}</dd>
  </div>;

const Facts = ({ projectId, project }: { projectId: string; project: Project }) =>
  <dl className={styles.facts}>
    {project.kind === 'professional' && project.team && <Fact term="Team">{project.team}</Fact>}
    <Fact term="Built with">{project.technologies.join(', ')}</Fact>
    {project.kind === 'hackathon' && <Fact term="Event">{project.event}</Fact>}
    {project.awards && <Fact term="Awards">{project.awards.join(' · ')}</Fact>}
    {project.kind === 'academic' && project.grade && <Fact term="Grade">{project.grade}</Fact>}
    {rolesFor(projectId).length > 1 && <Fact term="Roles">{rolesFor(projectId).map(role => role.title).reverse().join(', ')}</Fact>}
  </dl>;

const Previously = ({ projectId }: { projectId: string }) => {
  const previous = previousProject(projectId);
  if (!previous) {
    return null;
  }
  const [id, project] = previous;
  return (
    <nav aria-label="Previous project" className={styles.previously}>
      <ProjectTile href={`/work/${id}`} eyebrow={`Previously · ${formatPeriod(project.started, project.ended)}`} title={project.title}/>
    </nav>
  );
};

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId as string];

  if (!project) {
    return <NotFoundPage/>;
  }

  const line = lineFor(projectId as string, project);

  return (
    <article className={styles.page}>
      <BackButton to="/work" text="All work"/>
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          <LineMarker line={line}/>
          <span>{project.kind === 'professional' ? '' : `${kindTags[project.kind].label} · `}{formatPeriod(project.started, project.ended)}</span>
        </p>
        <PageTitle>{project.title}</PageTitle>
        <p className={styles.headline}>{project.headline}</p>
      </header>
      <div className={styles.overview}>
        <Thumbnail image={imageFor(project)}/>
        <aside className={styles.aside}>
          <Facts projectId={projectId as string} project={project}/>
          {(project.website || project.git_url) &&
            <div className={styles.actions}>
              {project.website && <Button as="a" to={project.website} {...externalLink}>Website</Button>}
              {project.git_url && <Button as="a" variant="secondary" to={project.git_url} {...externalLink}>GitHub</Button>}
            </div>}
        </aside>
      </div>
      {project.kind === 'professional' && <Impact projectId={projectId as string} line={line}/>}
      {project.content_detailed.length > 0 &&
        <section className={styles.section}>
          <SectionTitle>About</SectionTitle>
          {project.content_detailed.map((paragraph, index) => <p key={index} className={styles.paragraph}>{paragraph}</p>)}
        </section>}
      <Previously projectId={projectId as string}/>
    </article>
  );
};
