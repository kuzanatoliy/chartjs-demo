import { NavigationStrategy } from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../plugins/chartjs-legend-keyboard-plugin';

import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelectStrategy,
  ChartSelectDirection,
  ChartSelectLegendStrategy,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const LineChart = () => (
  <ChartProvider
    init-strategy={NavigationStrategy.BALANCE}
    init-legend-strategy={LegendNavigationStrategy.HORIZONTAL}
  >
    <Card>
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectLegendStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
