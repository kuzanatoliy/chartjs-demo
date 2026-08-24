import type { ENavigationDirection } from './direction.types';
import type { ENavigationStrategy } from './strategy.types';

export type TChartjsKeyboardPluginOptions = {
  strategy?: ENavigationStrategy;
  direction?: ENavigationDirection;
};
