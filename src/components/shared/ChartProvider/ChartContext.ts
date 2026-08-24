import { createContext } from 'react';
import {
  ENavigationDirection,
  ENavigationStrategy,
} from '../../../plugins/chartjs-keyboard-plugin';
import type { TChartContext } from './types';

export const DEFAULT_CHART_CONTEXT: TChartContext = {
  strategy: ENavigationStrategy.BALANCE,
  direction: ENavigationDirection.LTR,
  onChangeStrategy: () => {
    throw new Error('onChangeStratety in not available');
  },
  onChangeDirection: () => {
    throw new Error('onChangeDirection in not available');
  },
};

export const ChartContext = createContext(DEFAULT_CHART_CONTEXT);
