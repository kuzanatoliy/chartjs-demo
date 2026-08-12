import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { TChartContext, TChartState } from './types';
import { ChartContext } from './ChartContext';

export type TChartProviderProps = {
  ['init-strategy']?: TChartState['strategy'];
  children: ReactNode;
};

export const ChartProvider = (props: TChartProviderProps) => {
  const [strategy, setStrategy] = useState<TChartState['strategy']>(
    props['init-strategy'] || 'balance'
  );

  const onChangeStrategy = useCallback(
    (strategy: TChartContext['strategy']) => setStrategy(strategy),
    []
  );

  const value: TChartContext = useMemo(
    () => ({
      strategy,
      onChangeStrategy,
    }),
    [strategy, onChangeStrategy]
  );

  return (
    <ChartContext.Provider value={value}>
      {props.children}
    </ChartContext.Provider>
  );
};
