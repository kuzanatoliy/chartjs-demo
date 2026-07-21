import { VerticalBarChart } from '../VerticalBarChart';
import { HorizontalBarChart } from '../HorizontalBarChart';

import styles from './Main.module.scss';

export const Main = () => (
  <main className={styles['main-root']}>
    <ul className={styles['main-list']}>
      <li>
        <VerticalBarChart />
      </li>
      <li>
        <HorizontalBarChart />
      </li>
    </ul>
  </main>
);
