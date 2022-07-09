import { useEffect } from 'react';
import { LinkButton } from '../../components/Button/Button';
import { Contact } from '../../components/Contact/Contact';
import { Container } from '../../components/Container/Container';
import { Intro } from '../../components/Intro/Intro';
import { setTitle, setDescription, setOgProperties } from '../../meta/meta';

export function HomePage(): JSX.Element{

    useEffect(() => {
        setTitle('Mitch Lui | Full Stack Developer');
        setDescription('mitchlui.dev');
        setOgProperties({
          title: 'Mitch Lui | Full Stack Developer',
          description: 'mitchlui.dev',    
        })
      }, []);

    return (
        <Container>
        <div className={'fade-in'}>
            <Intro/>
            <div style={{textAlign: 'center', paddingTop: '2rem'}}>
              <LinkButton to={'/about'} text={'More about me'}/>
            </div>
            <Contact/>
        </div>
    </Container>
    );
} 
