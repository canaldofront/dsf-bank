import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const listMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '28rem' },
  };

  const itemMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
  };

  const renderLinks = navLinks.map((link, i) => (
    <motion.li variants={itemMotionProps} key={i}>
      <a href={link.url}>{link.name}</a>
    </motion.li>
  ));

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);

  return (
    <section className={styles.navbar}>
      <div>
        <Link href='/'>
          <Image src='/logo.svg' alt='DSF Bank' width={50} height={30} />
        </Link>
      </div>
      <nav>
        <ul className={styles.links}>{renderLinks}</ul>
        <AiOutlineMenuUnfold onClick={toggleIsMobile} className={styles.menu} />
        <motion.ul
          variants={listMotionProps}
          animate={isMobile ? 'open' : 'closed'}
          transition={{
            when: 'beforeChildren',
            staggerChildren: 0.2,
            type: 'just',
            duration: 0.3,
          }}
          className={styles['mobile-links']}>
          <AiOutlineClose onClick={toggleIsMobile} />
          {renderLinks}
        </motion.ul>
      </nav>
    </section>
  );
};

export default Navbar;
