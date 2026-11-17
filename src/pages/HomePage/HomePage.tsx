import { motion } from 'motion/react';
import { Intro } from '../../components/Intro/Intro';
// import { Projects } from '../../components/Projects/Projects';
// import { projects } from '../../data/projects';
import { Companies } from '../../components/Companies/Companies';
import { companies } from '../../data/companies';

export const HomePage = () => {
  return (
    <div>
      <div style={{ marginBottom: '64px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Intro/>
          {/* <Projects projects={projects} /> */}
          <Companies companies={companies} />
        </motion.div>
      </div>
    </div>
  );
};
