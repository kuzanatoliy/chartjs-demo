import { Card, CardContent } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { data, options } from './data';

export const VerticalBarChart = () => (
  <Card variant='outlined'>
    <CardContent>
      <Bar options={options} data={data} />
    </CardContent>
  </Card>
);
