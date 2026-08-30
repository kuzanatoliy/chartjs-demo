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

export const BubbleChart = () => (
  <ChartProvider init-strategy={NavigationStrategy.DATA_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bubble' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
