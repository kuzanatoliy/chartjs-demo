import { Chart, type Plugin } from 'chart.js';
// import { type TChartjsLegendKeyboardPluginOptions } from './types';

export class ChartjsLegendKeyboardPluginEngine {
  private chart: Chart;
  private legendContainer = document.createElement('div');

  private init = () => {
    this.legendContainer.style.position = 'absolute';
    this.chart.legend?.legendItems?.map((item) => {
      const option = document.createElement('div');
      option.setAttribute('aria-label', item.text);
      this.legendContainer.append(option);
    });
    this.chart.canvas.append(this.legendContainer);
  };

  constructor(chart: Chart) {
    this.chart = chart;
    this.init();
  }

  public destroy = () => {
    console.log(this.chart.canvas);
    //this.chart.canvas.removeChild(this.legendContainer);
  };
}

const store = new Map<Chart, ChartjsLegendKeyboardPluginEngine>();

export const chartjsLegendKeyboardPlugin: Plugin = {
  id: 'chartjsLegendKeyboardPlugin',
  afterInit: (
    chart: Chart
    //_,
    // options: TChartjsLegendKeyboardPluginOptions
  ) => {
    store.set(chart, new ChartjsLegendKeyboardPluginEngine(chart));
  },

  beforeDestroy: (chart: Chart) => {
    store.get(chart)?.destroy();
  },

  afterDestroy: (chart: Chart) => {
    store.delete(chart);
  },
};
