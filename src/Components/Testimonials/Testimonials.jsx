import Image from 'next/image';
import styles from './Testimonials.module.scss';
import { testimonials } from '@/constants';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const { title, list } = testimonials;

  const motionProps = {
    offScreen: {
      opacity: 0,
      y: 50,
    },
    onScreen: (i = 2) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
        delay: 0.1 * i,
      },
    }),
  };

  const renderList = list.map((item, i) => (
    <motion.li
      variants={motionProps}
      viewport={{ once: true }}
      initial='offScreen'
      whileInView='onScreen'
      custom={i}
      key={i}
      className={styles.item}>
      <div className={styles.heading}>
        <Image src={item.avatar} alt={item.name} width={74} height={74} />
        <div>
          <h3 className='p'>{item.name}</h3>
          <span className='p light'>{item.role}</span>
        </div>
      </div>
      <p className='light'>{item.comment}</p>
    </motion.li>
  ));

  return (
    <section id='testimonials' className={styles.testimonials}>
      <motion.h2
        variants={motionProps}
        viewport={{ once: true }}
        initial='offScreen'
        whileInView='onScreen'
        className='title'>
        {title}
      </motion.h2>
      <ul className={styles.list}>{renderList}</ul>
    </section>
  );
};

export default Testimonials;
