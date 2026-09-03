import { act, renderHook as render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  DEFAULT_CHART_DIRECTION,
  DEFAULT_CHART_STRATEGY,
  DEFAULT_LEGEND_STRATEGY,
  useChartState,
  type TUseChartStateProps,
} from './use-chart-state';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../../plugins/chartjs-legend-keyboard-plugin/constants';

describe('use-chart-state', () => {
  const renderHook = (props: TUseChartStateProps = {}) =>
    render(() => useChartState(props));

  it('Should render hook', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBeDefined();
    expect(result.current.onChangeStrategy).toBeDefined();
    expect(result.current.direction).toBeDefined();
    expect(result.current.onChangeDirection).toBeDefined();
    expect(result.current.legendStrategy).toBeDefined();
    expect(result.current.onChangeLegendStrategy).toBeDefined();
  });

  it('Should validate default state', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBe(DEFAULT_CHART_STRATEGY);
    expect(result.current.direction).toBe(DEFAULT_CHART_DIRECTION);
    expect(result.current.legendStrategy).toBe(DEFAULT_LEGEND_STRATEGY);
  });

  it('Should validate init state', () => {
    const { result } = renderHook({
      'init-strategy': NavigationStrategy.DATA,
      'init-legend-strategy': LegendNavigationStrategy.HORIZONTAL,
    });
    expect(result.current.strategy).not.toBe(DEFAULT_CHART_STRATEGY);
    expect(result.current.strategy).toBe(NavigationStrategy.DATA);
    expect(result.current.legendStrategy).not.toBe(DEFAULT_LEGEND_STRATEGY);
    expect(result.current.legendStrategy).toBe(
      LegendNavigationStrategy.HORIZONTAL
    );
  });

  it('Should change strategy', () => {
    const { result } = renderHook({
      'init-strategy': NavigationStrategy.DATASET,
    });
    expect(result.current.strategy).toBe(NavigationStrategy.DATASET);
    act(() => result.current.onChangeStrategy(NavigationStrategy.DATA));
    expect(result.current.strategy).toBe(NavigationStrategy.DATA);
  });

  it('Should change direction', () => {
    const { result } = renderHook();
    expect(result.current.direction).toBe(NavigationDirection.LTR);
    act(() => result.current.onChangeDirection(NavigationDirection.RTL));
    expect(result.current.direction).toBe(NavigationDirection.RTL);
  });

  it('Should change legend strategy', () => {
    const { result } = renderHook();
    expect(result.current.legendStrategy).toBe(LegendNavigationStrategy.BOTH);
    act(() =>
      result.current.onChangeLegendStrategy(LegendNavigationStrategy.VERTICAL)
    );
    expect(result.current.legendStrategy).toBe(
      LegendNavigationStrategy.VERTICAL
    );
  });
});
