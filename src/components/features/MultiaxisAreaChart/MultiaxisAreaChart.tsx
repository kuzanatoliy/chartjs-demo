import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const MultiaxisAreaChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='line' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
