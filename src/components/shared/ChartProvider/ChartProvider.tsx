import type { ReactNode } from 'react';
import type { TChartContext } from './types';
import { ChartContext } from './ChartContext';
import { useChartState, type TUseChartStateProps } from './hooks';

export type TChartProviderProps = TUseChartStateProps & {
  children: ReactNode;
};

export const ChartProvider = (props: TChartProviderProps) => {
  const value: TChartContext = useChartState(props);

  return (
    <ChartContext.Provider value={value}>
      {props.children}
    </ChartContext.Provider>
  );
};
