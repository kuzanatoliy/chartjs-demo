export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Scatter Chart',
    },
  },
  scales: {
    x: {
      type: 'linear' as const,
      position: 'bottom' as const,
    },
  },
};
