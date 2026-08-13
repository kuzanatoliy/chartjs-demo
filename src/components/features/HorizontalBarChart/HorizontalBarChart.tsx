import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const HorizontalBarChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
