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

export const PieChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATA_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='pie' options={options} data={data} />
      </ChartContainer>
      <ChartSelect />
    </Card>
  </ChartProvider>
);
