import type { TChartjsKeyboardPluginOptions } from '@kuzanatoliorg/chartjs-keyboard-plugin';
import type { TChartjsLegendKeyboardPluginOptions } from '../../../../plugins/chartjs-legend-keyboard-plugin/types';

export type TChartState = {
  strategy: Required<TChartjsKeyboardPluginOptions>['strategy'];
  direction: Required<TChartjsKeyboardPluginOptions>['direction'];
  legendStrategy: Required<TChartjsLegendKeyboardPluginOptions>['strategy'];
};
