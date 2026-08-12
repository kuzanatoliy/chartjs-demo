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
    chartjsKeyboardPlugin: {
      strategy: 'data' as const,
    },
  },
};
