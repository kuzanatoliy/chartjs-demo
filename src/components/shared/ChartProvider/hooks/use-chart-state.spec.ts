import { act, renderHook as render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  DEFAULT_CHART_DIRECTION,
  DEFAULT_CHART_STRATEGY,
  useChartState,
  type TUseChartStateProps,
} from './use-chart-state';
import {
  ENavigationDirection,
  ENavigationStrategy,
} from '../../../../plugins/chartjs-keyboard-plugin';

describe('use-chart-state', () => {
  const renderHook = (props: TUseChartStateProps = {}) =>
    render(() => useChartState(props));

  it('Should render hook', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBeDefined();
    expect(result.current.onChangeStrategy).toBeDefined();
    expect(result.current.direction).toBeDefined();
    expect(result.current.onChangeDirection).toBeDefined();
  });

  it('Should validate default state', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBe(DEFAULT_CHART_STRATEGY);
    expect(result.current.direction).toBe(DEFAULT_CHART_DIRECTION);
  });

  it('Should validate init state', () => {
    const { result } = renderHook({
      'init-strategy': ENavigationStrategy.DATA,
    });
    expect(result.current.strategy).not.toBe(DEFAULT_CHART_STRATEGY);
    expect(result.current.strategy).toBe(ENavigationStrategy.DATA);
  });

  it('Should change strategy', () => {
    const { result } = renderHook({
      'init-strategy': ENavigationStrategy.DATASET,
    });
    expect(result.current.strategy).toBe(ENavigationStrategy.DATASET);
    act(() => result.current.onChangeStrategy(ENavigationStrategy.DATA));
    expect(result.current.strategy).toBe(ENavigationStrategy.DATA);
  });

  it('Should change direction', () => {
    const { result } = renderHook();
    expect(result.current.direction).toBe(ENavigationDirection.LTR);
    act(() => result.current.onChangeDirection(ENavigationDirection.RTL));
    expect(result.current.direction).toBe(ENavigationDirection.RTL);
  });
});
