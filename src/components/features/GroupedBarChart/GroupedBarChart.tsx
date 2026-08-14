import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const GroupedBarChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATA}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
      <ChartSelect />
    </Card>
  </ChartProvider>
);
