import { motion } from 'motion/react';
import { Intro } from '../../components/Intro/Intro';
import { Button, ContainerHeader, FeaturedProject } from '@mitchlui/components';
import { featuredProjects } from '../../data/projects';
import { toFeaturedProject } from '../../data/cards';

export const HomePage = () => {
  return (
    <div>
      <div style={{ marginBottom: '64px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Intro/>
          <section>
            <ContainerHeader><h2>Recent work</h2></ContainerHeader>
            {featuredProjects.map(([id, project]) => <FeaturedProject key={id} {...toFeaturedProject(id, project)}/>)}
            <Button as="a" to="/work">See all work</Button>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
