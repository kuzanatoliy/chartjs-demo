import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const RadarChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='radar' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
