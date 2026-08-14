import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { ChartWrapper, type TChartWrapperProps } from './ChartWrapper';
import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';

vitest.mock('react-chartjs-2', async () => {
  const origin =
    await vitest.importActual<typeof import('react-chartjs-2')>(
      'react-chartjs-2'
    );
  return {
    ...origin,
    Chart: vitest
      .fn()
      .mockImplementation((props) => <origin.Chart {...props} />),
  };
});

describe('ChartContainer', () => {
  const DEFAULT_PROPS = {
    data: {
      labels: ['Jan', 'Feb', 'Mar'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [933, 1562, 440],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: 'Test chart',
        },
      },
    },
    type: 'bar' as const,
  };

  const renderComponent = (
    props: Partial<TChartWrapperProps<ChartOptions, ChartData>> = {}
  ) => {
    return render(<ChartWrapper {...DEFAULT_PROPS} {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent(DEFAULT_PROPS);
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({
          plugins: expect.objectContaining({
            chartjsKeyboardPlugin: expect.objectContaining({
              strategy: ENavigationStrategy.BALANCE,
            }),
          }),
        }),
      }),
      undefined
    );
    expect(
      screen.getByLabelText(DEFAULT_PROPS.options.plugins.title.text)
    ).toBeDefined();
  });
});
