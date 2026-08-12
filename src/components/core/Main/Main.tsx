import { VerticalBarChart } from '../../features/VerticalBarChart';
import { HorizontalBarChart } from '../../features/HorizontalBarChart';
import { StackedBarChart } from '../../features/StackedBarChart';
import { GroupedBarChart } from '../../features/GroupedBarChart';
import { AreaChart } from '../../features/AreaChart';
import { MultiaxisAreaChart } from '../../features/MultiaxisAreaChart';
import { LineChart } from '../../features/LineChart';
import { MultiaxisLineChart } from '../../features/MultiaxisLineChart';
import { PieChart } from '../../features/PieChart';
import { DoughnutChart } from '../../features/DoughnutChart';
import { PolarAreaChart } from '../../features/PolarAreaChart';
import { RadarChart } from '../../features/RadarChart';
import { ScatterChart } from '../../features/ScatterChart';
import { BubbleChart } from '../../features/BubbleChart';
import { MultitypeLineBarChart } from '../../features/MultitypeLineBarChart';
import { MultitypeLineStackedBarChart } from '../../features/MultitypeLineStackedBarChart';

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
      <li>
        <ScatterChart />
      </li>
      <li>
        <BubbleChart />
      </li>
      <li>
        <MultitypeLineBarChart />
      </li>
      <li>
        <MultitypeLineStackedBarChart />
      </li>
    </ul>
  </main>
);
