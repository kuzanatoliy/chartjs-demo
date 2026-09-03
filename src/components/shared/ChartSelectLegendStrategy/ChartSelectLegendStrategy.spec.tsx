import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ChartSelectLegendStrategy } from './ChartSelectLegendStrategy';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../plugins/chartjs-legend-keyboard-plugin/constants';
import { useChartContext } from '../ChartProvider';

vitest.mock('../ChartProvider', async () => {
  const origin =
    await vitest.importActual<typeof import('../ChartProvider')>(
      '../ChartProvider'
    );
  return {
    ...origin,
    useChartContext: vitest.fn(),
  };
});

describe('ChartSelectLegendStrategy', () => {
  const onChangeLegendStrategySpy = vitest.fn();

  const DEFAULT_PROPS: ReturnType<typeof useChartContext> = {
    strategy: NavigationStrategy.BALANCE,
    direction: NavigationDirection.LTR,
    legendStrategy: LegendNavigationStrategy.BOTH,
    onChangeStrategy: vitest.fn(),
    onChangeDirection: vitest.fn(),
    onChangeLegendStrategy: onChangeLegendStrategySpy,
  };

  const renderComponent = (
    props: Partial<ReturnType<typeof useChartContext>> = {}
  ) => {
    vitest
      .mocked(useChartContext)
      .mockReturnValue({ ...DEFAULT_PROPS, ...props });
    return render(<ChartSelectLegendStrategy />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({ legendStrategy: LegendNavigationStrategy.HORIZONTAL });
    expect(useChartContext).toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toBeDefined();
    expect(screen.getByRole('combobox')).toHaveValue(
      LegendNavigationStrategy.HORIZONTAL
    );
  });

  it('Should change legend strategy', async () => {
    renderComponent({ onChangeLegendStrategy: onChangeLegendStrategySpy });
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      LegendNavigationStrategy.HORIZONTAL
    );
    expect(onChangeLegendStrategySpy).toHaveBeenCalledWith(
      LegendNavigationStrategy.HORIZONTAL
    );
  });
});
