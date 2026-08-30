import type { TChartjsKeyboardPluginOptions } from '@kuzanatoliorg/chartjs-keyboard-plugin';

export type TChartState = {
  strategy: Required<TChartjsKeyboardPluginOptions>['strategy'];
  direction: Required<TChartjsKeyboardPluginOptions>['direction'];
};
