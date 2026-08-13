import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const ScatterChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper type='scatter' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
