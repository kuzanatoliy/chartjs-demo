import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const ScatterChart = () => (
  <ChartProvider>
    <Card>
      <ChartSelect />
      <ChartContainer>
        <ChartWrapper type='scatter' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
