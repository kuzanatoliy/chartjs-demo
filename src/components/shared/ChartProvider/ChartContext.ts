import { createContext } from 'react';
import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import type { TChartContext } from './types';

export const DEFAULT_CHART_CONTEXT: TChartContext = {
  strategy: ENavigationStrategy.BALANCE,
  onChangeStrategy: () => {
    throw new Error('onChangeStratety in not available');
  },
};

export const ChartContext = createContext(DEFAULT_CHART_CONTEXT);
