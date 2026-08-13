import { Bar } from 'react-chartjs-2';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const VerticalBarChart = () => (
  <ChartProvider>
    <Card>
      <ChartContainer>
        <ChartWrapper Component={Bar} options={options} data={data} />
      </ChartContainer>
    </Card>
  </ChartProvider>
);
