import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const DoughnutChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='doughnut' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
