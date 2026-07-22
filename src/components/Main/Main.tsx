import { VerticalBarChart } from '../VerticalBarChart';
import { HorizontalBarChart } from '../HorizontalBarChart';
import { StackedBarChart } from '../StackedBarChart';
import { GroupedBarChart } from '../GroupedBarChart';
import { AreaChart } from '../AreaChart';

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
      <li>
        <GroupedBarChart />
      </li>
      <li>
        <AreaChart />
      </li>
    </ul>
  </main>
);
