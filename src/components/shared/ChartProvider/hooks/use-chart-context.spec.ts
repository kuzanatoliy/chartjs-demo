import { renderHook as render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useChartContext } from './use-chart-context';
import { DEFAULT_CHART_CONTEXT } from '../ChartContext';
import { ENavigationStrategy } from '../../../../plugins/chartjs-keyboard-plugin';

describe('use-chart-context', () => {
  const renderHook = () => render(useChartContext);

  it('Should render hook', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBe(DEFAULT_CHART_CONTEXT.strategy);
  });

  it('Should call defoult onChangeStrategy', () => {
    const { result } = renderHook();
    try {
      result.current.onChangeStrategy(ENavigationStrategy.DATA);
      throw new Error('Not call default handler');
    } catch (error) {
      expect((error as Error).message).toBe(
        'onChangeStratety in not available'
      );
    }
  });
});
