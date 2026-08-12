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
      borderColor: 'rgb(53, 162, 235)',
      borderWidth: 1,
      data: [793, 1539, 744, 1325, 565, 1102, 1607, 1453, 652, 254, 130, 1285],
    },
  ],
};
