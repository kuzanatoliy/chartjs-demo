import { useCallback, useMemo, useState } from 'react';
import type { TChartContext, TChartState } from '../types';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';

export type TUseChartStateProps = {
  ['init-strategy']?: TChartState['strategy'];
};

export const DEFAULT_CHART_STRATEGY = NavigationStrategy.BALANCE;
export const DEFAULT_CHART_DIRECTION = NavigationDirection.LTR;

export const useChartState = (props: TUseChartStateProps) => {
  const [strategy, setStrategy] = useState<TChartState['strategy']>(
    props['init-strategy'] || DEFAULT_CHART_STRATEGY
  );

  const [direction, setDirection] = useState<TChartState['direction']>(
    DEFAULT_CHART_DIRECTION
  );

  const onChangeStrategy = useCallback(
    (strategy: TChartContext['strategy']) => setStrategy(strategy),
    []
  );

  const onChangeDirection = useCallback(
    (direction: TChartContext['direction']) => setDirection(direction),
    []
  );

  return useMemo(
    () => ({
      strategy,
      direction,
      onChangeStrategy,
      onChangeDirection,
    }),
    [strategy, direction, onChangeStrategy, onChangeDirection]
  );
};
