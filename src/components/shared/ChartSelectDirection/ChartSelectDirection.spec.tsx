import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { NavigationDirection } from '@kuzanatoliorg/chartjs-keyboard-plugin';

import {
  type TMockUseChartContext,
  mockUseChartContext,
  onChangeDirectionSpy,
} from '../ChartProvider/test-utils/use-chart-context';
import { ChartSelectDirection } from './ChartSelectDirection';
import { useChartContext } from '../ChartProvider';

describe('ChartSelectDirection', () => {
  const renderComponent = (props: TMockUseChartContext = {}) => {
    mockUseChartContext(props);
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
    renderComponent();
    expect(onChangeDirectionSpy).not.toHaveBeenCalled();
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      NavigationDirection.RTL
    );
    expect(onChangeDirectionSpy).toHaveBeenCalledWith(NavigationDirection.RTL);
  });
});
