import { NavigationStrategy } from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '@kuzanatoliorg/chartjs-legend-keyboard-plugin';

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

export const HorizontalBarChart = () => (
  <ChartProvider
    init-strategy={NavigationStrategy.BALANCE}
    init-legend-strategy={LegendNavigationStrategy.VERTICAL}
  >
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectLegendStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
