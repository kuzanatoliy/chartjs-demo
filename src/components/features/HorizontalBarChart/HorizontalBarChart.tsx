import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const HorizontalBarChart = () => (
  <ChartProvider>
    <Card>
      <ChartSelect />
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
