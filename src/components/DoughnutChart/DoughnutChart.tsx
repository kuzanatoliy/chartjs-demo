import { Doughnut } from 'react-chartjs-2';
import { Card } from '../Card';
import { ChartContainer } from '../ChartContainer';
import { data } from './data';
import { options } from './options';

export const DoughnutChart = () => (
  <Card>
    <ChartContainer>
      <Doughnut
        options={options}
        data={data}
        tabIndex={0}
        role='img'
        aria-label={options.plugins?.title?.text}
      />
    </ChartContainer>
  </Card>
);
