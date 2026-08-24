import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ChartSelectDirection } from './ChartSelectDirection';
import {
  ENavigationDirection,
  ENavigationStrategy,
} from '../../../plugins/chartjs-keyboard-plugin';
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
    strategy: ENavigationStrategy.BALANCE,
    direction: ENavigationDirection.LTR,
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
    renderComponent({ direction: ENavigationDirection.RTL });
    expect(useChartContext).toHaveBeenCalled();
    expect(screen.getByRole('combobox')).toBeDefined();
    expect(screen.getByRole('combobox')).toHaveValue(ENavigationDirection.RTL);
  });

  it('Should change direction', async () => {
    renderComponent({ onChangeDirection: onChangeDirectionSpy });
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      ENavigationDirection.RTL
    );
    expect(onChangeDirectionSpy).toHaveBeenCalledWith(ENavigationDirection.RTL);
  });
});
