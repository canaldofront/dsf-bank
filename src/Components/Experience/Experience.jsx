import styles from './Experience.module.scss';
import { experience } from '@/constants';

const Experience = () => {
  const renderExperience = experience.map((experience, i) => (
    <div key={i} className={`${styles.content} ${styles[experience.color]}`}>
      <h2 className='title'>{experience.title}</h2>
      <h3 className='p'>{experience.subtitle}</h3>
    </div>
  ));

  return <section className={styles.experience}>{renderExperience}</section>;
};

export default Experience;
