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
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [1238, 880, 1860, 309, 103, 1889, 941, 1403, 1836, 950, 315, 91],
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      data: [793, 1539, 744, 1325, 565, 1102, 1607, 1453, 652, 254, 130, 1285],
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      data: [350, 890, 1100, 600, 900, 450, 820, 1200, 300, 780, 1100, 400],
    },
  ],
};
