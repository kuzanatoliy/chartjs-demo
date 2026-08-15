import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelectStrategy,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const DoughnutChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATA_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='doughnut' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
    </Card>
  </ChartProvider>
);
