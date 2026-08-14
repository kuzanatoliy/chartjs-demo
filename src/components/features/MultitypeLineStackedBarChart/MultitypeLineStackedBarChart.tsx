import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import { data } from './data';
import { options } from './options';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';

export const MultitypeLineStackedBarChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATA}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
      <ChartSelect />
    </Card>
  </ChartProvider>
);
