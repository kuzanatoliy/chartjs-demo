import type { TChartjsKeyboardPluginOptions } from '@kuzanatoliorg/chartjs-keyboard-plugin';
import type { TChartjsLegendKeyboardPluginOptions } from '@kuzanatoliorg/chartjs-legend-keyboard-plugin';

export type TChartState = {
  strategy: Required<TChartjsKeyboardPluginOptions>['strategy'];
  direction: Required<TChartjsKeyboardPluginOptions>['direction'];
  legendStrategy: Required<TChartjsLegendKeyboardPluginOptions>['strategy'];
};
