import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const PolarAreaChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='polarArea' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
