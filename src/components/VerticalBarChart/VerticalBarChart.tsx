import { Bar } from 'react-chartjs-2';
import { Card } from '../Card';
import { ChartContainer } from '../ChartContainer';
import { data, options } from './data';

export const VerticalBarChart = () => (
  <Card>
    <ChartContainer>
      <Bar options={options} data={data} tabIndex={0} />
    </ChartContainer>
  </Card>
);
