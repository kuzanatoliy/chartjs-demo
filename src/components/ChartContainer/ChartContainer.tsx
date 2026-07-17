import type { ReactNode } from 'react';
import styles from './ChartContainer.module.scss';

export interface IChartContainer {
  children: ReactNode;
}

export const ChartContainer = (props: IChartContainer) => (
  <div className={styles['chartcontainer-root']}>{props.children}</div>
);
