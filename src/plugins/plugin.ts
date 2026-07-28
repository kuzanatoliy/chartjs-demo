import type { Chart, Plugin } from 'chart.js';

const store = new Map<Chart, ChartjsKeyboardPluginEngine>();

class ChartjsKeyboardPluginEngine {
  private chart: Chart;
  private abortController = new AbortController();

  private initCanvas = () => {
    if (!this.chart.canvas.hasAttribute('tabIndex')) {
      this.chart.canvas.setAttribute('tabIndex', '0');
    }
  };

  private setActiveElement = (
    chart: Chart,
    index: number,
    datasetIndex: number
  ) => {
    const activeElements = [
      {
        index,
        datasetIndex,
      },
    ];
    chart.setActiveElements(activeElements);
    chart.tooltip?.setActiveElements(activeElements, { x: 0, y: 0 });
    console.log(chart);
  };

  private datasetIds: number[];
  private activeDatasetId: number;
  private dataLengths: number[];
  private activeDataId: number = 0;

  private refreshMeta = (chart: Chart) => {
    const meta = chart.getSortedVisibleDatasetMetas();
    this.datasetIds = meta.map((item) => item.index);
    this.activeDatasetId = 0;
    this.dataLengths = meta.map((item) => item.data.length);
    this.activeDataId = 0;
  };

  private home = (chart: Chart) => {
    this.setActiveElement(chart, 0, 0);
  };

  private focusHandler = () => {
    this.refreshMeta(this.chart);
    this.home(this.chart);
    this.chart.update();
  };

  private blurHandler = () => {
    this.chart.setActiveElements([]);
    this.chart.tooltip?.setActiveElements([], { x: 0, y: 0 });
    this.chart.update();
  };

  private keydownHandler = (event: KeyboardEvent) => {
    console.log(event);
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.stopPropagation();
        event.preventDefault();
        console.log(event.key);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.stopPropagation();
        event.preventDefault();
        console.log(event.key);
        break;
      case 'Home':
        event.stopPropagation();
        event.preventDefault();
        console.log(event.key);
        break;
      case 'End':
        event.stopPropagation();
        event.preventDefault();
        console.log(event.key);
        break;
    }
  };

  constructor(chart: Chart) {
    this.chart = chart;

    this.initCanvas();

    this.chart.canvas.addEventListener('focus', this.focusHandler, {
      signal: this.abortController.signal,
    });
    this.chart.canvas.addEventListener('blur', this.blurHandler, {
      signal: this.abortController.signal,
    });
    this.chart.canvas.addEventListener('keydown', this.keydownHandler, {
      signal: this.abortController.signal,
    });
  }

  destroy() {
    this.abortController.abort();
  }
}

export const chartjsKeyboardPlugin: Plugin = {
  id: 'chartjsKeyboardPlugin',
  afterInit: (chart: Chart) => {
    store.set(chart, new ChartjsKeyboardPluginEngine(chart));
  },
  afterDestroy: (chart: Chart) => {
    store.get(chart)?.destroy();
    store.delete(chart);
  },
};
