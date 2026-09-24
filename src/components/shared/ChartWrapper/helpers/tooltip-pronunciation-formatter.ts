import type { ChartType, TooltipItem } from 'chart.js';

export const tooltipPronunciationFormatter = (
  tooltipItems: TooltipItem<ChartType>[]
) => {
  return `${tooltipItems[0].label} ${tooltipItems.map((item) => `${item.dataset.label}: ${item.formattedValue}`).join(' ')}`;
};
