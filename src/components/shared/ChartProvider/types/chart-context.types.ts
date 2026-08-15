import type { TChartHandlers } from './chart-handlers.types';
import type { TChartState } from './chart-state.types';

export type TChartContext = TChartState & TChartHandlers;
