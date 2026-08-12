import type { ChartOptions } from 'chart.js';

export const options: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Vertical Bar Chart',
    },
    chartjsKeyboardPlugin: {
      strategy: 'data',
    },
  },
};
