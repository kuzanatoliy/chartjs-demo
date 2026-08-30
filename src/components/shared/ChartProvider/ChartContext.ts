import { createContext } from 'react';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import type { TChartContext } from './types';

export const DEFAULT_CHART_CONTEXT: TChartContext = {
  strategy: NavigationStrategy.BALANCE,
  direction: NavigationDirection.LTR,
  onChangeStrategy: () => {
    throw new Error('onChangeStratety in not available');
  },
  onChangeDirection: () => {
    throw new Error('onChangeDirection in not available');
  },
};

export const ChartContext = createContext(DEFAULT_CHART_CONTEXT);
