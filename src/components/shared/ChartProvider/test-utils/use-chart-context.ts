import { vitest } from 'vitest';
import { useChartContext } from '../hooks/use-chart-context';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../../plugins/chartjs-legend-keyboard-plugin/constants';

vitest.mock('../hooks/use-chart-context', async () => {
  return {
    useChartContext: vitest.fn(),
  };
});

export const onChangeStrategySpy = vitest.fn();
export const onChangeDirectionSpy = vitest.fn();
export const onChangeLegendStrategySpy = vitest.fn();

export const DEFAULT_STRATEGY = NavigationStrategy.BALANCE;
export const DEFAULT_DIRECTION = NavigationDirection.LTR;
export const DEFAULT_LEGEND_STRATEGY = LegendNavigationStrategy.BOTH;

const DEFAULT_PROPS: ReturnType<typeof useChartContext> = {
  strategy: DEFAULT_STRATEGY,
  direction: DEFAULT_DIRECTION,
  legendStrategy: DEFAULT_LEGEND_STRATEGY,
  onChangeStrategy: onChangeStrategySpy,
  onChangeDirection: onChangeDirectionSpy,
  onChangeLegendStrategy: onChangeLegendStrategySpy,
};

export const mockUseChartContext = (
  props: Partial<ReturnType<typeof useChartContext>> = {}
) => {
  vitest
    .mocked(useChartContext)
    .mockReturnValue({ ...DEFAULT_PROPS, ...props });
};

export type TMockUseChartContext = Parameters<typeof mockUseChartContext>[0];
