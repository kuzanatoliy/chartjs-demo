import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import { data } from './data';
import { options } from './options';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelectStrategy,
  ChartSelectDirection,
} from '../../shared';

export const MultitypeLineStackedBarChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATA}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
