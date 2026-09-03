import { renderHook as render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useChartContext } from './use-chart-context';
import { DEFAULT_CHART_CONTEXT } from '../ChartContext';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../../plugins/chartjs-legend-keyboard-plugin/constants';

describe('use-chart-context', () => {
  const renderHook = () => render(useChartContext);

  it('Should render hook', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBe(DEFAULT_CHART_CONTEXT.strategy);
    expect(result.current.direction).toBe(DEFAULT_CHART_CONTEXT.direction);
    expect(result.current.legendStrategy).toBe(
      DEFAULT_CHART_CONTEXT.legendStrategy
    );
  });

  it('Should call defoult onChangeStrategy', () => {
    const { result } = renderHook();
    try {
      result.current.onChangeStrategy(NavigationStrategy.DATA);
      throw new Error('Not call default handler');
    } catch (error) {
      expect((error as Error).message).toBe(
        'onChangeStratety in not available'
      );
    }
  });

  it('Should call defoult onChangeDirection', () => {
    const { result } = renderHook();
    try {
      result.current.onChangeDirection(NavigationDirection.RTL);
      throw new Error('Not call default handler');
    } catch (error) {
      expect((error as Error).message).toBe(
        'onChangeDirection in not available'
      );
    }
  });

  it('Should call default onChangeLegendStrategy', () => {
    const { result } = renderHook();
    try {
      result.current.onChangeLegendStrategy(
        LegendNavigationStrategy.HORIZONTAL
      );
      throw new Error('Not call default handler');
    } catch (error) {
      expect((error as Error).message).toBe(
        'onChangeLegendStrategy in not available'
      );
    }
  });
});
