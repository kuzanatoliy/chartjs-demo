import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const PolarAreaChart = () => (
  <ChartProvider>
    <Card>
      <ChartSelect />
      <ChartContainer>
        <ChartWrapper type='polarArea' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
