import { useCallback, useMemo, useState } from 'react';
import type { TChartContext, TChartState } from '../types';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../../plugins/chartjs-legend-keyboard-plugin/constants';

export type TUseChartStateProps = {
  ['init-strategy']?: TChartState['strategy'];
  ['init-legend-strategy']?: TChartState['legendStrategy'];
};

export const DEFAULT_CHART_STRATEGY = NavigationStrategy.BALANCE;
export const DEFAULT_CHART_DIRECTION = NavigationDirection.LTR;
export const DEFAULT_LEGEND_STRATEGY = LegendNavigationStrategy.BOTH;

export const useChartState = (props: TUseChartStateProps) => {
  const [strategy, setStrategy] = useState<TChartState['strategy']>(
    props['init-strategy'] || DEFAULT_CHART_STRATEGY
  );

  const [direction, setDirection] = useState<TChartState['direction']>(
    DEFAULT_CHART_DIRECTION
  );

  const [legendStrategy, setLegendStrategy] = useState<
    TChartState['legendStrategy']
  >(props['init-legend-strategy'] || DEFAULT_LEGEND_STRATEGY);

  const onChangeStrategy = useCallback(
    (strategy: TChartContext['strategy']) => setStrategy(strategy),
    []
  );

  const onChangeDirection = useCallback(
    (direction: TChartContext['direction']) => setDirection(direction),
    []
  );

  const onChangeLegendStrategy = useCallback(
    (strategy: TChartContext['legendStrategy']) => setLegendStrategy(strategy),
    []
  );

  return useMemo(
    () => ({
      strategy,
      direction,
      legendStrategy,
      onChangeStrategy,
      onChangeDirection,
      onChangeLegendStrategy,
    }),
    [
      strategy,
      direction,
      legendStrategy,
      onChangeStrategy,
      onChangeDirection,
      onChangeLegendStrategy,
    ]
  );
};
