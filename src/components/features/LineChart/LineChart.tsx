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

export const LineChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.BALANCE}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
      <ChartSelect />
    </Card>
  </ChartProvider>
);
