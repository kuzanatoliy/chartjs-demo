import { useCallback, useMemo, useState } from 'react';
import type { TChartContext, TChartState } from '../types';
import { ENavigationStrategy } from '../../../../plugins/chartjs-keyboard-plugin';

export type TUseChartStateProps = {
  ['init-strategy']?: TChartState['strategy'];
};

export const useChartState = (props: TUseChartStateProps) => {
  const [strategy, setStrategy] = useState<TChartState['strategy']>(
    props['init-strategy'] || ENavigationStrategy.BALANCE
  );

  const onChangeStrategy = useCallback(
    (strategy: TChartContext['strategy']) => setStrategy(strategy),
    []
  );

  return useMemo(
    () => ({
      strategy,
      onChangeStrategy,
    }),
    [strategy, onChangeStrategy]
  );
};
