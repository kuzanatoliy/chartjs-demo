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

export const PieChart = () => (
  <ChartProvider
    init-strategy={NavigationStrategy.DATA_FIRST}
    init-legend-strategy={LegendNavigationStrategy.BOTH}
  >
    <Card>
      <ChartContainer>
        <ChartWrapper type='pie' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectLegendStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
