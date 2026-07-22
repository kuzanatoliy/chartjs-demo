import { Bar } from 'react-chartjs-2';
import { Card } from '../Card';
import { ChartContainer } from '../ChartContainer';
import { data } from './data';
import { options } from './options';

export const StackedBarChart = () => (
  <Card>
    <ChartContainer>
      <Bar options={options} data={data} tabIndex={0} />
    </ChartContainer>
  </Card>
);
