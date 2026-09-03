import type { TChartState } from './chart-state.types';

export type TChartHandlers = {
  onChangeStrategy: (strategy: TChartState['strategy']) => void;
  onChangeDirection: (direction: TChartState['direction']) => void;
  onChangeLegendStrategy: (strategy: TChartState['legendStrategy']) => void;
};
