import type { Chart, Plugin } from 'chart.js';
import { ChartjsKeyboardPluginEngine } from './engines';
import {
  BalanceNavigationStrategy,
  DataFirstNavigationStrategy,
  DataNavigationStrategy,
  DataSetFirstNavigationStrategy,
  DataSetNavigationStrategy,
} from './strategies';
import type { TChartjsKeyboardPluginOptions } from './types';

const store = new Map<Chart, ChartjsKeyboardPluginEngine>();

export const chartjsKeyboardPlugin: Plugin = {
  id: 'chartjsKeyboardPlugin',
  afterInit: (chart: Chart, _, options: TChartjsKeyboardPluginOptions) => {
    let Strategy = BalanceNavigationStrategy;
    switch (options.strategy) {
      case 'data-first':
        Strategy = DataFirstNavigationStrategy;
        break;
      case 'dataset-first':
        Strategy = DataSetFirstNavigationStrategy;
        break;
      case 'data':
        Strategy = DataNavigationStrategy;
        break;
      case 'dataset':
        Strategy = DataSetNavigationStrategy;
        break;
    }
    store.set(
      chart,
      new ChartjsKeyboardPluginEngine(chart, new Strategy(chart))
    );
  },

  afterEvent: (chart: Chart, args) => {
    if (chart.canvas !== document.activeElement) {
      return;
    }
    if (args.event.type === 'click') {
      store.get(chart)?.refresh();
    }
  },

  afterDestroy: (chart: Chart) => {
    store.get(chart)?.destroy();
    store.delete(chart);
  },
};
