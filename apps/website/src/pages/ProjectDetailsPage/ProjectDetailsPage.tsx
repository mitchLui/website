import { PropsWithChildren } from 'react';
import { useParams } from 'react-router';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { BackButton, Button, Tag, Thumbnail } from '@mitchlui/components';
import { Project, projects } from '../../data/projects';
import { formatPeriod } from '../../data/dates';
import { rolesFor } from '../../data/roles';
import { imageFor, kindTags } from '../../data/cards';
import styles from './ProjectDetailsPage.module.css';

const Impact = ({ projectId }: { projectId: string }) =>
  <section className={styles.section}>
    <h2>Impact</h2>
    {rolesFor(projectId).map(role =>
      <div key={role.title + role.started} className={styles.role}>
        <h3>{role.title}</h3>
        <p className={styles.rolePeriod}>{formatPeriod(role.started, role.ended)}</p>
        <ul className={styles.impact}>
          {role.impact.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )}
  </section>;

const Fact = ({ term, children }: PropsWithChildren<{ term: string }>) =>
  <div className={styles.fact}>
    <dt>{term}</dt>
    <dd>{children}</dd>
  </div>;

const Facts = ({ project }: { project: Project }) =>
  <dl className={styles.facts}>
    <Fact term="Built with">{project.technologies.join(', ')}</Fact>
    {project.kind === 'hackathon' && <Fact term="Event">{project.event}</Fact>}
    {project.awards && <Fact term="Awards">{project.awards.join(' · ')}</Fact>}
    {project.kind === 'academic' && project.grade && <Fact term="Grade">{project.grade}</Fact>}
  </dl>;

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects[projectId as string];

  if (!project) {
    return <NotFoundPage/>;
  }

  const tag = kindTags[project.kind];

  return (
    <article className={styles.page}>
      <BackButton to="/work" text="All work"/>
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          <Tag color={tag.color}>{tag.label}</Tag>
          <span>{formatPeriod(project.started, project.ended)}</span>
        </p>
        <h1>{project.title}</h1>
        <p className={styles.headline}>{project.headline}</p>
      </header>
      <div className={styles.overview}>
        <Thumbnail className={styles.hero} image={imageFor(project)}/>
        <aside className={styles.aside}>
          <Facts project={project}/>
          {(project.website || project.git_url) &&
            <div className={styles.actions}>
              {project.website && <Button as="a" to={project.website} target={'_blank'}>Website</Button>}
              {project.git_url && <Button as="a" variant="secondary" to={project.git_url} target={'_blank'}>GitHub</Button>}
            </div>}
        </aside>
      </div>
      {project.kind === 'professional' && <Impact projectId={projectId as string}/>}
      {project.content_detailed.length > 0 &&
        <section className={styles.section}>
          <h2>About</h2>
          {project.content_detailed.map((paragraph, index) => <p key={index} className={styles.paragraph}>{paragraph}</p>)}
        </section>}
    </article>
  );
};
