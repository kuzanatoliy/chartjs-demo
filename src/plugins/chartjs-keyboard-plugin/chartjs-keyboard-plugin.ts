import type { Chart, Plugin } from 'chart.js';
import { ChartjsKeyboardPluginEngine } from './engines';
import {
  BalanceNavigationStrategy,
  DataFirstNavigationStrategy,
  DataNavigationStrategy,
  DataSetFirstNavigationStrategy,
  DataSetNavigationStrategy,
} from './strategies';
import {
  type TChartjsKeyboardPluginOptions,
  ENavigationStrategy,
} from './types';

const store = new Map<Chart, ChartjsKeyboardPluginEngine>();

export const chartjsKeyboardPlugin: Plugin = {
  id: 'chartjsKeyboardPlugin',
  afterInit: (chart: Chart, _, options: TChartjsKeyboardPluginOptions) => {
    let Strategy = BalanceNavigationStrategy;
    switch (options.strategy) {
      case ENavigationStrategy.DATA_FIRST:
        Strategy = DataFirstNavigationStrategy;
        break;
      case ENavigationStrategy.DATASET_FIRST:
        Strategy = DataSetFirstNavigationStrategy;
        break;
      case ENavigationStrategy.DATA:
        Strategy = DataNavigationStrategy;
        break;
      case ENavigationStrategy.DATASET:
        Strategy = DataSetNavigationStrategy;
        break;
    }
    store.set(
      chart,
      new ChartjsKeyboardPluginEngine(chart, new Strategy(chart), options)
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
