# Chartjs component development rules

### File structure

The each chartjs component should be in components directory and has the following structure

- root folder - should be named as component in PascalCase
  - `index.ts` - should contain all required exports
  - component file - should be named as component in PascalCase and contains component code.
  - `data.ts` - should contain required data to the chart.
  - `options.ts` - should contain required options to the chart.

### Required wrappers

- [Card](../src/components/Card/Card.tsx) - contains styles required to visualize chart card
- [ChartContainer](../src/components/ChartContainer/ChartContainer.tsx) - contains style overrides for the chart

### Component example

    import { Bar } from 'react-chartjs-2';
    import { Card } from '../Card';
    import { ChartContainer } from '../ChartContainer';
    import { data } from './data';
    import { options } from './options';

    export const VerticalBarChart = () => (
      <Card>
        <ChartContainer>
          <Bar options={options} data={data} tabIndex={0} />
        </ChartContainer>
      </Card>
    );

### Options example

    export const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Chart.js Vertical Bar Chart',
        },
      },
    };

### Data example

    export const data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [
            933, 1562, 440, 1449, 1753, 1695, 1843, 1079, 1342, 805, 1437, 831,
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [230, 735, 1081, 1956, 534, 1433, 1918, 301, 1195, 1989, 1697, 993],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
