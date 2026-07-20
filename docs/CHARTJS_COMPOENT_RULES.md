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
      labels:[...], // Labes should contain short mounth names if no different instructions
      datasets: [
        {
          label: 'Dataset 1',
          data: [...], // Data should contain 12 numbers from 0 to 2000 if no different instructions
          backgroundColor: // Background should be rgb color with good contrast with current background specified in index.scss,
        },
        ...
      ] // Dataset should contain two collections if no different instructions,
    };

### Configureation

The required packages should be registred in [chart-js](/src/configs/chart-js.ts) config file
