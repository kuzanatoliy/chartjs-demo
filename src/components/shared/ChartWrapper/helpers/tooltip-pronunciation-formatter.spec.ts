import type { TooltipItem, ChartType } from 'chart.js';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { tooltipPronunciationFormatter } from './tooltip-pronunciation-formatter';

describe('tooltipPronunciationFormatter', () => {
  const data = [
    {
      label: 'Jan',
      dataset: {
        label: 'Dataset 1',
      },
      formattedValue: '1,130',
    },
    {
      label: 'Jan',
      dataset: {
        label: 'Dataset 2',
      },
      formattedValue: '240',
    },
  ] as TooltipItem<ChartType>[];

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should buld formatted string', () => {
    expect(tooltipPronunciationFormatter(data)).toBe(
      'Jan Dataset 1: 1,130 Dataset 2: 240'
    );
  });
});
