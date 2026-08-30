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

export const RadarChart = () => (
  <ChartProvider init-strategy={NavigationStrategy.BALANCE}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='radar' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
