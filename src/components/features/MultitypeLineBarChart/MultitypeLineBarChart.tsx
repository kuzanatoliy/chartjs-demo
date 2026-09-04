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

export const MultitypeLineBarChart = () => (
  <ChartProvider
    init-strategy={NavigationStrategy.DATA_FIRST}
    init-legend-strategy={LegendNavigationStrategy.HORIZONTAL}
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
