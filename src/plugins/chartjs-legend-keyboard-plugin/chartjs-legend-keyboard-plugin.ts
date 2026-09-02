import { Chart, type Plugin } from 'chart.js';
import { type TChartjsLegendKeyboardPluginOptions } from './types';

export const isOnesetChart = (type: string) =>
  type === 'doughnut' || type === 'pie' || type === 'polarArea';

const NavigationKeys = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  ENTER: 'Enter',
  SPACE: ' ',
};

const NavigationKeysSet = new Set([
  NavigationKeys.ARROW_LEFT,
  NavigationKeys.ARROW_UP,
  NavigationKeys.ARROW_RIGHT,
  NavigationKeys.ARROW_DOWN,
  NavigationKeys.HOME,
  NavigationKeys.END,
  NavigationKeys.ENTER,
  NavigationKeys.SPACE,
]);

const DEFAULT_OPTIONS: Required<TChartjsLegendKeyboardPluginOptions> = {
  outlineColor: 'inherit',
  outlineOffset: 'inherit',
  outlineWeight: 'inherit',
  borderRadius: 'inherit',
};

export class ChartjsLegendKeyboardPluginEngine {
  private chart: Chart;
  private legendContainer = document.createElement('div');
  private legendOptions: HTMLDivElement[] = [];
  private activeElement = 0;
  private options: Required<TChartjsLegendKeyboardPluginOptions> =
    DEFAULT_OPTIONS;

  private toggleElement = (index: number) => {
    let isSelected;
    if (isOnesetChart(this.chart.getSortedVisibleDatasetMetas()[0].type)) {
      this.chart.toggleDataVisibility(index);
      isSelected = this.chart.getDataVisibility(index);
    } else if (this.chart.isDatasetVisible(index)) {
      isSelected = false;
      this.chart.hide(index);
    } else {
      isSelected = true;
      this.chart.show(index);
    }
    this.legendOptions[index].setAttribute(
      'aria-selected',
      isSelected.toString()
    );
    this.chart.update();
  };

  private buildClickHandler = (index: number) => () => {
    this.legendOptions[this.activeElement].setAttribute('tabindex', '-1');
    this.activeElement = index;
    this.legendOptions[this.activeElement].setAttribute('tabindex', '0');
    this.toggleElement(index);
  };

  private buildKeyboardHandler = (ind: number) => {
    return (event: KeyboardEvent) => {
      let index = ind;
      if (NavigationKeysSet.has(event.key)) {
        event.stopPropagation();
        event.preventDefault();
      }
      switch (event.key) {
        case NavigationKeys.ARROW_LEFT:
        case NavigationKeys.ARROW_UP:
          this.legendOptions[index].setAttribute('tabindex', '-1');
          index--;
          if (index < 0) {
            index = this.legendOptions.length - 1;
          }
          this.legendOptions[index].setAttribute('tabindex', '0');
          this.legendOptions[index].focus();
          this.activeElement = index;
          break;
        case NavigationKeys.ARROW_RIGHT:
        case NavigationKeys.ARROW_DOWN:
          this.legendOptions[index].setAttribute('tabindex', '-1');
          index++;
          if (index === this.legendOptions.length) {
            index = 0;
          }
          this.legendOptions[index].setAttribute('tabindex', '0');
          this.legendOptions[index].focus();
          this.activeElement = index;
          break;
        case NavigationKeys.HOME:
          this.legendOptions[index].setAttribute('tabindex', '-1');
          this.legendOptions[0].setAttribute('tabindex', '0');
          this.legendOptions[0].focus();
          this.activeElement = 0;
          break;
        case NavigationKeys.END:
          this.legendOptions[index].setAttribute('tabindex', '-1');
          this.legendOptions[this.legendOptions.length - 1].setAttribute(
            'tabindex',
            '0'
          );
          this.legendOptions[this.legendOptions.length - 1].focus();
          this.activeElement = this.legendOptions.length - 1;
          break;
        case NavigationKeys.ENTER:
        case NavigationKeys.SPACE:
          this.toggleElement(index);
          break;
      }
      this.chart.update();
    };
  };

  private init = () => {
    this.legendContainer.style.position = 'absolute';
    this.chart.legend?.legendItems?.map((item, ind) => {
      const option = document.createElement('div');
      this.legendOptions.push(option);
      option.addEventListener('click', this.buildClickHandler(ind));
      option.addEventListener('keydown', this.buildKeyboardHandler(ind));
      option.setAttribute('aria-label', item.text);
      option.setAttribute(
        'tabindex',
        (this.activeElement === ind ? 0 : -1).toString()
      );
      option.style.position = 'absolute';
      option.style.outlineOffset = this.options.outlineOffset;
      option.style.borderRadius = this.options.borderRadius;
      option.style.outlineColor = this.options.outlineColor;
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
  };

  constructor(chart: Chart, options: TChartjsLegendKeyboardPluginOptions = {}) {
    this.chart = chart;
    this.options = {
      ...this.options,
      ...options,
    };
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

  beforeDraw: (
    chart: Chart,
    _,
    options: TChartjsLegendKeyboardPluginOptions
  ) => {
    if (!store.get(chart)) {
      store.set(chart, new ChartjsLegendKeyboardPluginEngine(chart, options));
    }
  },

  beforeDestroy: (chart: Chart) => {
    store.get(chart)?.destroy();
  },

  afterDestroy: (chart: Chart) => {
    store.delete(chart);
  },
};
