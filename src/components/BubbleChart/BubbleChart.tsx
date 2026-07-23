import { Bubble } from 'react-chartjs-2';
import { Card } from '../Card';
import { ChartContainer } from '../ChartContainer';
import { data } from './data';
import { options } from './options';

export const BubbleChart = () => (
  <Card>
    <ChartContainer>
      <Bubble options={options} data={data} tabIndex={0} />
    </ChartContainer>
  </Card>
);
