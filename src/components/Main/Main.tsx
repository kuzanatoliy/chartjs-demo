import { VerticalBarChart } from '../VerticalBarChart';
import { HorizontalBarChart } from '../HorizontalBarChart';
import { StackedBarChart } from '../StackedBarChart';

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
      <li>
        <StackedBarChart />
      </li>
    </ul>
  </main>
);
