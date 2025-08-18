import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Intro } from '../../components/Intro/Intro';
import { setPageProperties } from '../../meta/meta';
// import { Projects } from '../../components/Projects/Projects';
// import { projects } from '../../data/projects';
import { Companies } from '../../components/Companies/Companies';
import { companies } from '../../data/companies';

export const HomePage = () => {
  useEffect(() => {
    setPageProperties({
      title: 'Mitch Lui | Full Stack Developer',
      description: 'mitchlui.dev'
    });
  }, []);

  return (
    <div className={'fade-in'}>
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
