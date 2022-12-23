import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/Button';
import { Container } from '../components/Container';
import styles from '../styles/Home.module.scss';

export const Intro = (): React.ReactElement =>
  <div className={styles["intro-grid"]}>
    <span className={`${styles["container-header"]} ${styles["header-item"]}`}><h1><code>Hello, I&apos;m Mitch</code></h1></span>
    <span className={`${styles["container-header"]} ${styles["title-item"]}`}><h2>Fullstack software developer</h2></span>
    <div className={`${styles.item} ${styles.left}`}>
            I am a trilingual (English, Cantonese and Mandarin) year 3 computer science student from Hong Kong at the <CompanyLink className={`${styles.link} ${styles.uob}`} url={'https://www.bristol.ac.uk'} text={'University of Bristol'} />.
            Before that, I was an intern at <CompanyLink className={`${styles.link} ${styles.asiabots}`} url={'https://www.asiabots.com'} text={'Asiabots'} /> writing API-first microservices for omni-channel conversational AIs.
    </div>
    <div className={`${styles.item} ${styles.right}`}>
            Currently a Graduate Teacher and IT Clinic Technician / Supervisor at the <CompanyLink className={`${styles.link} ${styles.uob}`} url={'https://www.bristol.ac.uk'} text={'University'} /> in addition to being the Vice-President at <CompanyLink className={`${styles.link} ${styles.css}`} url={'https://cssbristol.co.uk'} text={'CSS Bristol'} />.
            Will be returning as a Graduate Software Engineer at <CompanyLink className={`${styles.link} ${styles.wise}`} url="https://www.wise.com" text={'Wise\'s'} /> Spend Business Experience Team.
    </div>
  </div>;

type CompanyLinkProps = {
    className: string;
    url: string;
    text: string;
};

const CompanyLink = ({ className, url, text }: CompanyLinkProps): React.ReactElement =>
  <a className={className} target={'_blank'} rel={'noreferrer'} href={url}>{text}</a>;

export const Contact = (): React.ReactElement =>
  <div className={styles["contact-grid"]}>
    <span className={`${styles["container-header"]} ${styles["title-item"]}`}><h2>Contact</h2></span>
    <Button href="mailto:mitch@mitchlui.dev">Email</Button>
    <Button href="https://linkedin.com/in/mitchlui">LinkedIn</Button>
    <Button href="https://github.com/mitchlui">GitHub</Button>
    <Button href="https://twitter.com/mitchlui">Twitter</Button>
    <span></span>
  </div>;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mitch Lui | Full Stack Developer</title>
        <meta name="description" content="Mitch Lui | Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Intro/>
        <Contact/>
      </Container>
    </div>
  );
};



export default Home;
