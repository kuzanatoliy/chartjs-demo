import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartSelectStrategy,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const VerticalBarChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATA_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
    </Card>
  </ChartProvider>
);
