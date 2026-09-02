import { ChartType } from 'chart.js';
import { type TChartjsKeyboardPluginOptions } from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { type TChartjsLegendKeyboardPluginOptions } from './src/plugins/chartjs-legend-keyboard-plugin';

// Define the shape of your plugin's configuration options
export interface MyCustomPluginOptions {
  customColor?: string;
  showLabels?: boolean;
  borderWidth?: number;
}

// Augment Chart.js module namespace
declare module 'chart.js' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PluginOptionsByType<TType extends ChartType> {
    chartjsKeyboardPlugin?: TChartjsKeyboardPluginOptions;
    chartjsLegendKeyboardPlugin?: TChartjsLegendKeyboardPluginOptions;
  }
}
