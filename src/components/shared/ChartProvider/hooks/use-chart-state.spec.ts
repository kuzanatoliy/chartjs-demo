import { act, renderHook as render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  DEFAULT_CHART_STRATEGY,
  useChartState,
  type TUseChartStateProps,
} from './use-chart-state';
import { ENavigationStrategy } from '../../../../plugins/chartjs-keyboard-plugin';

describe('use-chart-state', () => {
  const renderHook = (props: TUseChartStateProps = {}) =>
    render(() => useChartState(props));

  it('Should render hook', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBeDefined();
    expect(result.current.onChangeStrategy).toBeDefined();
  });

  it('Should validate default state', () => {
    const { result } = renderHook();
    expect(result.current.strategy).toBe(DEFAULT_CHART_STRATEGY);
  });

  it('Should validate init state', () => {
    const { result } = renderHook({
      'init-strategy': ENavigationStrategy.DATA,
    });
    expect(result.current.strategy).not.toBe(DEFAULT_CHART_STRATEGY);
    expect(result.current.strategy).toBe(ENavigationStrategy.DATA);
  });

  it('Should validate state change', () => {
    const { result } = renderHook({
      'init-strategy': ENavigationStrategy.DATASET,
    });
    expect(result.current.strategy).toBe(ENavigationStrategy.DATASET);
    act(() => result.current.onChangeStrategy(ENavigationStrategy.DATA));
    expect(result.current.strategy).toBe(ENavigationStrategy.DATA);
  });
});
