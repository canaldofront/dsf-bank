import Link from 'next/link';
import styles from './Footer.module.scss';
import { footer } from '@/constants';
import Image from 'next/image';

const Footer = () => {
  const { description, links, contact, copy, social } = footer;

  const renderLinks = links.map((link, i) => (
    <li key={i} className='p light'>
      <Link href={link.url}>{link.name}</Link>
    </li>
  ));

  const renderContacts = contact.map((contact, i) => (
    <li key={i} className='p light'>
      {contact}
    </li>
  ));

  const renderSocial = social.map((social, i) => (
    <li key={i}>
      <Link href={social.url}>{social.component}</Link>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.conteiner1}>
        <div className={styles.column1}>
          <Link href='/'>
            <Image src='/logo.svg' alt='dsf bank' width={50} height={30} />
          </Link>
          <p className='light'>{description}</p>
        </div>
        <div className={styles.column2}>
          <h2 className='p'>Links úteis</h2>
          <ul>{renderLinks}</ul>
        </div>
        <div className={styles.column3}>
          <h2 className='p'>Contato</h2>
          <ul>{renderContacts}</ul>
        </div>
      </div>
      <div className={styles.conteiner2}>
        <span className='p light'>{copy}</span>
        <ul>{renderSocial}</ul>
      </div>
    </footer>
  );
};

export default Footer;
