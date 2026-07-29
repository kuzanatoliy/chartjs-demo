import type { ActiveDataPoint, Chart, Plugin } from 'chart.js';

const store = new Map<Chart, ChartjsKeyboardPluginEngine>();

const setChartActiveElements = (
  chart: Chart,
  activeElements: ActiveDataPoint[]
) => {
  chart.setActiveElements(activeElements);
  chart.tooltip?.setActiveElements(activeElements, { x: 0, y: 0 });
};

type TNavigationStrategy = {
  refreshMeta: (chart: Chart) => void;
  goEnd: (chart: Chart) => void;
  goNext: (chart: Chart) => void;
  goPrevious: (chart: Chart) => void;
  goHome: (chart: Chart) => void;
};
class DataFirstNavigationStrategy {
  private datasetIds: number[] = [];
  private activeDatasetId: number = 0;
  private dataLengths: number[] = [];
  private activeDataId: number = 0;

  constructor(chart: Chart) {
    this.refreshMeta(chart);
  }

  private setChartActiveElements = (chart: Chart) => {
    setChartActiveElements(chart, [
      {
        index: this.activeDataId,
        datasetIndex: this.datasetIds[this.activeDatasetId],
      },
    ]);
  };

  public refreshMeta = (chart: Chart) => {
    const meta = chart.getSortedVisibleDatasetMetas();
    this.datasetIds = meta.map((item) => item.index);
    this.activeDatasetId = 0;
    this.dataLengths = meta.map((item) => item.data.length);
    this.activeDataId = 0;
  };

  public goEnd = (chart: Chart) => {
    this.activeDatasetId = this.datasetIds.length - 1;
    this.activeDataId = this.dataLengths[this.dataLengths.length - 1] - 1;
    this.setChartActiveElements(chart);
  };

  public goNext = (chart: Chart) => {
    this.activeDataId++;
    if (this.dataLengths[this.activeDatasetId] === this.activeDataId) {
      this.activeDataId = 0;
      this.activeDatasetId++;
      if (this.activeDatasetId === this.datasetIds.length) {
        this.activeDatasetId = 0;
      }
    }
    this.setChartActiveElements(chart);
  };

  public goPrevious = (chart: Chart) => {
    this.activeDataId--;
    if (this.activeDataId < 0) {
      this.activeDatasetId--;
      if (this.activeDatasetId < 0) {
        this.activeDatasetId = this.datasetIds.length - 1;
      }
      this.activeDataId = this.dataLengths[this.activeDatasetId] - 1;
    }
    this.setChartActiveElements(chart);
  };

  public goHome = (chart: Chart) => {
    this.activeDatasetId = 0;
    this.activeDataId = 0;
    this.setChartActiveElements(chart);
  };
}

class ChartjsKeyboardPluginEngine {
  private chart: Chart;
  private abortController = new AbortController();
  private strategy: TNavigationStrategy;

  private initCanvas = () => {
    if (!this.chart.canvas.hasAttribute('tabIndex')) {
      this.chart.canvas.setAttribute('tabIndex', '0');
    }
  };

  private focusHandler = () => {
    this.strategy.refreshMeta(this.chart);
    this.strategy.goHome(this.chart);
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
        this.strategy.goPrevious(this.chart);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.stopPropagation();
        event.preventDefault();
        this.strategy.goNext(this.chart);
        break;
      case 'Home':
        event.stopPropagation();
        event.preventDefault();
        this.strategy.goHome(this.chart);
        break;
      case 'End':
        event.stopPropagation();
        event.preventDefault();
        this.strategy.goEnd(this.chart);
        break;
    }
    this.chart.update();
  };

  constructor(chart: Chart) {
    this.chart = chart;
    this.strategy = new DataFirstNavigationStrategy(chart);

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
