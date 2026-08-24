import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelectStrategy,
  ChartSelectDirection,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const LineChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.BALANCE}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
