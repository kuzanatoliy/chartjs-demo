import { createContext } from 'react';
import type { TChartContext } from './types';

export const DEFAULT_CHART_CONTEXT: TChartContext = {
  strategy: 'balance',
  onChangeStrategy: () => {
    throw new Error('onChangeStratety in not available');
  },
};

export const ChartContext = createContext(DEFAULT_CHART_CONTEXT);
