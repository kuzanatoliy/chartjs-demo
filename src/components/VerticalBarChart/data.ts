export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

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
