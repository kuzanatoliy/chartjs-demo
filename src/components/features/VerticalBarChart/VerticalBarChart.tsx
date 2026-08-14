import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartSelect,
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
      <ChartSelect />
    </Card>
  </ChartProvider>
);
