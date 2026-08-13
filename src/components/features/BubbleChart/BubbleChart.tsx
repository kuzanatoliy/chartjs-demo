import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const BubbleChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bubble' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
