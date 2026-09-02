import { Chart, type Plugin } from 'chart.js';
// import { type TChartjsLegendKeyboardPluginOptions } from './types';

export class ChartjsLegendKeyboardPluginEngine {
  private chart: Chart;
  private legendContainer = document.createElement('div');
  private legendOptions: HTMLDivElement[] = [];

  private init = () => {
    this.legendContainer.style.position = 'fixed';
    this.chart.legend?.legendItems?.map((item) => {
      const option = document.createElement('div');
      this.legendOptions.push(option);
      option.setAttribute('aria-label', item.text);
      option.style.position = 'absolute';
      option.style.outline = 'solid';
      this.legendContainer.append(option);
    });
    this.chart.canvas.insertAdjacentElement('afterend', this.legendContainer);
  };

  private refreshStyles = () => {
    const rect = this.chart.canvas.getBoundingClientRect();
    const {
      top: ltop = 0,
      left: lleft = 0,
      width: lwidth = 0,
      height: lheight = 0,
    } = this.chart.legend || {};
    this.legendContainer.style.top = `${rect.top + window.scrollY + ltop}px`;
    this.legendContainer.style.left = `${rect.left + window.scrollX + lleft}px`;
    this.legendContainer.style.width = `${lwidth}px`;
    this.legendContainer.style.height = `${lheight}px`;
    this.legendOptions.forEach((item, ind) => {
      const { top, left, width, height } =
        // @ts-expect-error need use private property
        this.chart.legend!.legendHitBoxes[ind];
      item.style.top = `${top - ltop}px`;
      item.style.left = `${left - lleft}px`;
      item.style.width = `${width}px`;
      item.style.height = `${height}px`;
    });
    this.legendContainer.style.outline = 'solid';
    console.log('called');
  };

  constructor(chart: Chart) {
    this.chart = chart;
    this.init();
    this.refreshStyles();
    window.addEventListener('resize', this.refreshStyles);
  }

  public destroy = () => {
    this.legendContainer.remove();
    window.removeEventListener('resize', this.refreshStyles);
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
