import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const PieChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='pie' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
