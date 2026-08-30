import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ChartSelectStrategy } from './ChartSelectStrategy';
import {
  NavigationStrategy,
  NavigationDirection,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';
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

describe('ChartSelectStrategy', () => {
  const onChangeStrategySpy = vitest.fn();

  const DEFAULT_PROPS: ReturnType<typeof useChartContext> = {
    strategy: NavigationStrategy.BALANCE,
    direction: NavigationDirection.LTR,
    onChangeStrategy: onChangeStrategySpy,
    onChangeDirection: vitest.fn(),
  };

  const renderComponent = (
    props: Partial<ReturnType<typeof useChartContext>> = {}
  ) => {
    vitest
      .mocked(useChartContext)
      .mockReturnValue({ ...DEFAULT_PROPS, ...props });
    return render(<ChartSelectStrategy />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({ strategy: NavigationStrategy.DATA });
    expect(useChartContext).toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toBeDefined();
    expect(screen.getByRole('combobox')).toHaveValue(NavigationStrategy.DATA);
  });

  it('Should change strategy', async () => {
    renderComponent({ onChangeStrategy: onChangeStrategySpy });
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      NavigationStrategy.DATA
    );
    expect(onChangeStrategySpy).toHaveBeenCalledWith(NavigationStrategy.DATA);
  });
});
