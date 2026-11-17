import { motion } from 'motion/react';
import { Intro } from '../../components/Intro/Intro';
import { FeaturedProject } from '../../components/FeaturedProject/FeaturedProject';
import { Button } from '../../components/Button/Button';
import { ContainerHeader } from '../../layouts/Container/Container';
import { featuredProjects } from '../../data/projects';

export const HomePage = () => {
  return (
    <div>
      <div style={{ marginBottom: '64px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Intro/>
          <section>
            <ContainerHeader><h2>Recent work</h2></ContainerHeader>
            {featuredProjects.map(([id, project]) => <FeaturedProject key={id} id={id} project={project}/>)}
            <Button as="a" to="/work">See all work</Button>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
