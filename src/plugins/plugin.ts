import type { ActiveDataPoint, Chart, Plugin } from 'chart.js';

const store = new Map<Chart, ChartjsKeyboardPluginEngine>();

const setChartActiveElements = (
  chart: Chart,
  activeElements: ActiveDataPoint[]
) => {
  chart.setActiveElements(activeElements);
  chart.tooltip?.setActiveElements(activeElements, { x: 0, y: 0 });
};

const isOnesetChart = (type: string) =>
  type === 'doughnut' || type === 'pie' || type === 'polarArea';

type TNavigationStrategy = {
  refreshMeta: () => void;
  goEnd: () => void;
  goNext: () => void;
  goPrevious: () => void;
  goHome: () => void;
  hide: () => void;
  display: () => void;
};

const NavigationKeys = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  ESCAPE: 'Escape',
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
  NavigationKeys.ESCAPE,
  NavigationKeys.ENTER,
  NavigationKeys.SPACE,
]);

abstract class NavigationStrategy {
  protected datasetIds: number[] = [];
  protected activeDatasetId: number = -1;
  protected dataIds: number[][] = [];
  protected activeDataId: number = -1;
  protected chart: Chart;

  constructor(chart: Chart) {
    this.chart = chart;
    this.refreshMeta();
  }

  public refreshMeta = () => {
    const meta = this.chart.getSortedVisibleDatasetMetas();
    this.datasetIds = meta.map((item) => item.index);
    this.dataIds =
      meta[0] && isOnesetChart(meta[0].type)
        ? meta.map((item) =>
            item.data
              .map((_, ind) => ind)
              .filter((ind) => this.chart.getDataVisibility(ind))
          )
        : meta.map((item) => item.data.map((_, ind) => ind));
    if (this.dataIds.length && this.dataIds[0].length) {
      this.activeDatasetId = 0;
      this.activeDataId = 0;
    } else {
      this.activeDatasetId = -1;
      this.activeDataId = -1;
    }
  };

  protected setChartActiveElements: () => void = () => {
    throw new Error('The setChartActiveElements function is not Implemented');
  };

  abstract goEnd(): void;
  abstract goNext(): void;
  abstract goPrevious(): void;
  abstract goHome(): void;

  public hide = () => {
    setChartActiveElements(this.chart, []);
  };

  public display = () => {
    this.setChartActiveElements();
  };
}
class DataFirstNavigationStrategy extends NavigationStrategy {
  protected setChartActiveElements = () => {
    if (this.activeDataId !== -1 && this.activeDatasetId !== -1) {
      setChartActiveElements(this.chart, [
        {
          index: this.dataIds[this.activeDatasetId][this.activeDataId],
          datasetIndex: this.datasetIds[this.activeDatasetId],
        },
      ]);
    } else {
      setChartActiveElements(this.chart, []);
    }
  };

  public goEnd = () => {
    this.activeDatasetId = this.datasetIds.length - 1;
    this.activeDataId = this.dataIds[this.dataIds.length - 1].length - 1;
    this.setChartActiveElements();
  };

  public goNext = () => {
    this.activeDataId++;
    if (this.dataIds[this.activeDatasetId].length === this.activeDataId) {
      this.activeDataId = 0;
      this.activeDatasetId++;
      if (this.activeDatasetId === this.datasetIds.length) {
        this.activeDatasetId = 0;
      }
    }
    this.setChartActiveElements();
  };

  public goPrevious = () => {
    this.activeDataId--;
    if (this.activeDataId < 0) {
      this.activeDatasetId--;
      if (this.activeDatasetId < 0) {
        this.activeDatasetId = this.datasetIds.length - 1;
      }
      this.activeDataId = this.dataIds[this.activeDatasetId].length - 1;
    }
    this.setChartActiveElements();
  };

  public goHome = () => {
    this.activeDatasetId = 0;
    this.activeDataId = 0;
    this.setChartActiveElements();
  };

  public hide = () => {
    setChartActiveElements(this.chart, []);
  };

  public display = () => {
    this.setChartActiveElements();
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
    this.strategy.refreshMeta();
    this.strategy.goHome();
    this.chart.update();
  };

  private blurHandler = () => {
    this.chart.setActiveElements([]);
    this.chart.tooltip?.setActiveElements([], { x: 0, y: 0 });
    this.chart.update();
  };

  private keydownHandler = (event: KeyboardEvent) => {
    if (NavigationKeysSet.has(event.key)) {
      event.stopPropagation();
      event.preventDefault();
    }
    switch (event.key) {
      case NavigationKeys.ARROW_LEFT:
      case NavigationKeys.ARROW_UP:
        this.strategy.goPrevious();
        break;
      case NavigationKeys.ARROW_RIGHT:
      case NavigationKeys.ARROW_DOWN:
        this.strategy.goNext();
        break;
      case NavigationKeys.HOME:
        this.strategy.goHome();
        break;
      case NavigationKeys.END:
        this.strategy.goEnd();
        break;
      case NavigationKeys.ESCAPE:
        this.strategy.hide();
        break;
      case NavigationKeys.ENTER:
      case NavigationKeys.SPACE:
        this.strategy.display();
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

  public refresh() {
    this.strategy.refreshMeta();
    this.strategy.display();
  }

  public destroy() {
    this.abortController.abort();
  }
}

export const chartjsKeyboardPlugin: Plugin = {
  id: 'chartjsKeyboardPlugin',
  afterInit: (chart: Chart) => {
    store.set(chart, new ChartjsKeyboardPluginEngine(chart));
  },

  afterEvent: (chart: Chart, args) => {
    if (chart.canvas !== document.activeElement) {
      return;
    }
    if (args.event.type === 'click') {
      store.get(chart)?.refresh();
    }
  },

  afterDestroy: (chart: Chart) => {
    store.get(chart)?.destroy();
    store.delete(chart);
  },
};
