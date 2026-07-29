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
  };

  private datasetIds: number[] = [];
  private activeDatasetId: number = 0;
  private dataLengths: number[] = [];
  private activeDataId: number = 0;

  private refreshMeta = (chart: Chart) => {
    const meta = chart.getSortedVisibleDatasetMetas();
    this.datasetIds = meta.map((item) => item.index);
    this.activeDatasetId = 0;
    this.dataLengths = meta.map((item) => item.data.length);
    this.activeDataId = 0;
  };

  private goEnd = (chart: Chart) => {
    this.activeDatasetId = this.datasetIds.length - 1;
    this.activeDataId = this.dataLengths[this.dataLengths.length - 1] - 1;
    this.setActiveElement(
      chart,
      this.activeDataId,
      this.datasetIds[this.activeDatasetId]
    );
  };

  private goNext = (chart: Chart) => {
    this.activeDataId++;
    if (this.dataLengths[this.activeDatasetId] === this.activeDataId) {
      this.activeDataId = 0;
      this.activeDatasetId++;
      if (this.activeDatasetId === this.datasetIds.length) {
        this.activeDatasetId = 0;
      }
    }
    this.setActiveElement(
      chart,
      this.activeDataId,
      this.datasetIds[this.activeDatasetId]
    );
  };

  private goPrevious = (chart: Chart) => {
    this.activeDataId--;
    if (this.activeDataId < 0) {
      this.activeDatasetId--;
      if (this.activeDatasetId < 0) {
        this.activeDatasetId = this.datasetIds.length - 1;
      }
      this.activeDataId = this.dataLengths[this.activeDatasetId] - 1;
    }
    this.setActiveElement(
      chart,
      this.activeDataId,
      this.datasetIds[this.activeDatasetId]
    );
  };

  private goHome = (chart: Chart) => {
    this.activeDatasetId = 0;
    this.activeDataId = 0;
    this.setActiveElement(
      chart,
      this.activeDataId,
      this.datasetIds[this.activeDatasetId]
    );
  };

  private focusHandler = () => {
    this.refreshMeta(this.chart);
    this.goHome(this.chart);
    this.chart.update();
  };

  private blurHandler = () => {
    this.chart.setActiveElements([]);
    this.chart.tooltip?.setActiveElements([], { x: 0, y: 0 });
    this.chart.update();
  };

  private keydownHandler = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.stopPropagation();
        event.preventDefault();
        this.goPrevious(this.chart);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.stopPropagation();
        event.preventDefault();
        this.goNext(this.chart);
        break;
      case 'Home':
        event.stopPropagation();
        event.preventDefault();
        this.goHome(this.chart);
        break;
      case 'End':
        event.stopPropagation();
        event.preventDefault();
        this.goEnd(this.chart);
        break;
    }
    this.chart.update();
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
