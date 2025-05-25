import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Intro } from '../../components/Intro/Intro';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';
import { Projects } from '../../components/Projects/Projects';
import { projects } from '../../data/projects';

export const HomePage = () => {
  useEffect(() => {
    setTitle('Mitch Lui | Full Stack Developer');
    setDescription('mitchlui.dev');
    setOgProperties({
      title: 'Mitch Lui | Full Stack Developer',
      description: 'mitchlui.dev'
    });
  }, []);

  return (
    <div className={'fade-in'}>
      <div style={{ marginBottom: '64px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Intro/>
          <Projects projects={projects} />
        </motion.div>
      </div>
    </div>
  );
};
