import { VerticalBarChart } from '../VerticalBarChart';
import { HorizontalBarChart } from '../HorizontalBarChart';
import { StackedBarChart } from '../StackedBarChart';
import { GroupedBarChart } from '../GroupedBarChart';
import { AreaChart } from '../AreaChart';
import { MultiaxisAreaChart } from '../MultiaxisAreaChart';
import { LineChart } from '../LineChart';
import { MultiaxisLineChart } from '../MultiaxisLineChart';
import { PieChart } from '../PieChart';
import { DoughnutChart } from '../DoughnutChart';
import { PolarAreaChart } from '../PolarAreaChart';
import { RadarChart } from '../RadarChart';

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
      <li>
        <MultiaxisAreaChart />
      </li>
      <li>
        <LineChart />
      </li>
      <li>
        <MultiaxisLineChart />
      </li>
      <li>
        <PieChart />
      </li>
      <li>
        <DoughnutChart />
      </li>
      <li>
        <PolarAreaChart />
      </li>
      <li>
        <RadarChart />
      </li>
    </ul>
  </main>
);
