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

export const AreaChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATASET_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
    </Card>
  </ChartProvider>
);
