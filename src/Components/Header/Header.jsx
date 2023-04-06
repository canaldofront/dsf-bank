import CreditCardComponent from './CreditCard';
import styles from './Header.module.scss';
import { header } from '@/constants';
import { motion } from 'framer-motion';

const Header = () => {
  const { caption, title, subtitle } = header;

  const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1,
    },
  });

  return (
    <header className={styles.header}>
      <div className={styles.conteiner}>
        <motion.div {...motionProps(-100, 0)} className={styles.content}>
          <span>{caption}</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </motion.div>
        <motion.div {...motionProps(100, 0)}>
          <CreditCardComponent />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
