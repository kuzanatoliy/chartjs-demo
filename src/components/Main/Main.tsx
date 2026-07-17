import { VerticalBarChart } from '../VerticalBarChart';

import styles from './Main.module.scss';

export const Main = () => (
  <main className={styles['main-root']}>
    <VerticalBarChart />
  </main>
);
