import type { TChartjsKeyboardPluginOptions } from '../../../../plugins/chartjs-keyboard-plugin';

export type TChartState = {
  strategy: Required<TChartjsKeyboardPluginOptions>['strategy'];
  direction: Required<TChartjsKeyboardPluginOptions>['direction'];
};
