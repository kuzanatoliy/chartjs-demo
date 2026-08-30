import { NavigationStrategy } from '@kuzanatoliorg/chartjs-keyboard-plugin';

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

export const MultiaxisAreaChart = () => (
  <ChartProvider init-strategy={NavigationStrategy.DATA}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
