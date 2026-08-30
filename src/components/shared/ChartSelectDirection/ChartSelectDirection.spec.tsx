import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import {
  NavigationDirection,
  NavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';

import { ChartSelectDirection } from './ChartSelectDirection';
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

describe('ChartSelectDirection', () => {
  const onChangeDirectionSpy = vitest.fn();

  const DEFAULT_PROPS: ReturnType<typeof useChartContext> = {
    strategy: NavigationStrategy.BALANCE,
    direction: NavigationDirection.LTR,
    onChangeStrategy: vitest.fn(),
    onChangeDirection: onChangeDirectionSpy,
  };

  const renderComponent = (
    props: Partial<ReturnType<typeof useChartContext>> = {}
  ) => {
    vitest
      .mocked(useChartContext)
      .mockReturnValue({ ...DEFAULT_PROPS, ...props });
    return render(<ChartSelectDirection />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({ direction: NavigationDirection.RTL });
    expect(useChartContext).toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toBeDefined();
    expect(screen.getByRole('combobox')).toHaveValue(NavigationDirection.RTL);
  });

  it('Should change direction', async () => {
    renderComponent({ onChangeDirection: onChangeDirectionSpy });
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      NavigationDirection.RTL
    );
    expect(onChangeDirectionSpy).toHaveBeenCalledWith(NavigationDirection.RTL);
  });
});
