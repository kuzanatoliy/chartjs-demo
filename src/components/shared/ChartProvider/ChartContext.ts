import { createContext } from 'react';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '@kuzanatoliorg/chartjs-legend-keyboard-plugin';

import type { TChartContext } from './types';

export const DEFAULT_CHART_CONTEXT: TChartContext = {
  strategy: NavigationStrategy.BALANCE,
  direction: NavigationDirection.LTR,
  legendStrategy: LegendNavigationStrategy.BOTH,
  onChangeStrategy: () => {
    throw new Error('onChangeStratety in not available');
  },
  onChangeDirection: () => {
    throw new Error('onChangeDirection in not available');
  },
  onChangeLegendStrategy: () => {
    throw new Error('onChangeLegendStrategy in not available');
  },
};

export const ChartContext = createContext(DEFAULT_CHART_CONTEXT);
