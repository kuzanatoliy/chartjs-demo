export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bubble Chart',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      position: 'left' as const,
    },
    x: {
      type: 'linear' as const,
      position: 'bottom' as const,
    },
  },
};
