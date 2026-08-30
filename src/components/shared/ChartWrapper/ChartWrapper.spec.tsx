import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import * as chartProvider from '../ChartProvider';

import { ChartWrapper, type TChartWrapperProps } from './ChartWrapper';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';

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

describe('ChartWrapper', () => {
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
    renderComponent();
    expect(
      screen.getByLabelText(DEFAULT_PROPS.options.plugins.title.text)
    ).toBeDefined();
  });

  it('Should use balance strategy', () => {
    renderComponent();
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({
          plugins: expect.objectContaining({
            chartjsKeyboardPlugin: expect.objectContaining({
              strategy: NavigationStrategy.BALANCE,
            }),
          }),
        }),
      }),
      undefined
    );
  });

  it('Should use ltr direction', () => {
    renderComponent();
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({
          plugins: expect.objectContaining({
            legend: expect.objectContaining({
              rtl: false,
              textDirection: NavigationDirection.LTR,
            }),
            tooltip: expect.objectContaining({
              rtl: false,
              textDirection: NavigationDirection.LTR,
            }),
            title: expect.objectContaining({
              textDirection: NavigationDirection.LTR,
            }),
            chartjsKeyboardPlugin: expect.objectContaining({
              direction: NavigationDirection.LTR,
            }),
          }),
          scales: expect.objectContaining({
            x: expect.objectContaining({
              reverse: false,
            }),
            y: expect.objectContaining({
              position: 'left',
            }),
          }),
        }),
      }),
      undefined
    );
  });

  it('Should use rtl direction', () => {
    vitest.spyOn(chartProvider, 'useChartContext').mockReturnValueOnce({
      strategy: NavigationStrategy.BALANCE,
      direction: NavigationDirection.RTL,
    } as chartProvider.TChartContext);
    renderComponent();
    expect(Chart).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({
          plugins: expect.objectContaining({
            legend: expect.objectContaining({
              rtl: true,
              textDirection: NavigationDirection.RTL,
            }),
            tooltip: expect.objectContaining({
              rtl: true,
              textDirection: NavigationDirection.RTL,
            }),
            title: expect.objectContaining({
              textDirection: NavigationDirection.RTL,
            }),
            chartjsKeyboardPlugin: expect.objectContaining({
              direction: NavigationDirection.RTL,
            }),
          }),
          scales: expect.objectContaining({
            x: expect.objectContaining({
              reverse: true,
            }),
            y: expect.objectContaining({
              position: 'right',
            }),
          }),
        }),
      }),
      undefined
    );
  });
});
