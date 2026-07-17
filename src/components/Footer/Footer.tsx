import { GitHubIcon, LinkedinIcon } from '../../icons';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles['footer-root']}>
    <div>© Kuzanatoliorg</div>
    <ul className={styles['footer-link-list']}>
      <li>
        <a
          className={styles['footer-link']}
          aria-label='Go to github'
          href='https://github.com/kuzanatoliy'
        >
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a
          className={styles['footer-link']}
          aria-label='Go to linkedin'
          href='https://www.linkedin.com/in/anatoli-kuzmiankou-9a3b74b4/'
        >
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  </footer>
);
