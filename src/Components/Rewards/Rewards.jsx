import EarthComponent from './Earth';
import styles from './Rewards.module.scss';
import { rewards } from '@/constants';
import { motion } from 'framer-motion';

const Rewards = () => {
  const { title, list } = rewards;

  const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
      delay: 0.1,
    },
  });

  const renderList = list.map((item, i) => (
    <motion.div {...motionProps(-100, 0)} key={i} className={styles.item}>
      <h3 className='p'>{item.title}</h3>
      <p className='light'>{item.subtitle}</p>
    </motion.div>
  ));

  return (
    <section id='rewards' className={styles.rewards}>
      <div className={styles.content}>
        <motion.h2 {...motionProps(-100, 0)} className='title'>
          {title}
        </motion.h2>
        {renderList}
      </div>
      <motion.div {...motionProps(100, 0)}>
        <EarthComponent />
      </motion.div>
    </section>
  );
};

export default Rewards;
