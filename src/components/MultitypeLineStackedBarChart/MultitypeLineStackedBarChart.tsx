import { Chart } from 'react-chartjs-2';
import { Card } from '../Card';
import { ChartContainer } from '../ChartContainer';
import { data } from './data';
import { options } from './options';

export const MultitypeLineStackedBarChart = () => (
  <Card>
    <ChartContainer>
      <Chart
        type='bar'
        options={options}
        data={data}
        tabIndex={0}
        role='img'
        aria-label={options.plugins?.title?.text}
      />
    </ChartContainer>
  </Card>
);
