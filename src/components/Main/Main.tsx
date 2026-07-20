import { VerticalBarChart } from '../VerticalBarChart';
import { HorizontalBarChart } from '../HorizontalBarChart';

import styles from './Main.module.scss';

export const Main = () => (
  <main className={styles['main-root']}>
    <VerticalBarChart />
    <HorizontalBarChart />
  </main>
);
