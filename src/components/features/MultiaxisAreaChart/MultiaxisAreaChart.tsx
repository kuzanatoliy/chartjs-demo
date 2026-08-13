import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const MultiaxisAreaChart = () => (
  <ChartProvider>
    <Card>
      <ChartSelect />
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
