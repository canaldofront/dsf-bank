import styles from './Resources.module.scss';
import { resources } from '@/constants';
import { motion } from 'framer-motion';

const Resources = () => {
  const { title, subtitle, list } = resources;

  const motionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: 0.1,
    },
  };

  const renderList = list.map((resource, i) => (
    <li key={i} className={styles.item}>
      {resource.icon}
      <h3 className='p'>{resource.title}</h3>
      <h4 className='p light'>{resource.subtitle}</h4>
    </li>
  ));

  return (
    <motion.section
      {...motionProps}
      id='resources'
      className={styles.resources}>
      <div className={styles.conteiner}>
        <h2 className='title'>{title}</h2>
        <p className='light'>{subtitle}</p>
        <ul className={styles.list}>{renderList}</ul>
      </div>
    </motion.section>
  );
};

export default Resources;
