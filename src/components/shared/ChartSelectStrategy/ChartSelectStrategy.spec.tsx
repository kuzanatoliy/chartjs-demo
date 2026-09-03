import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import {
  type TMockUseChartContext,
  mockUseChartContext,
  onChangeStrategySpy,
} from '../ChartProvider/test-utils/use-chart-context';
import { ChartSelectStrategy } from './ChartSelectStrategy';
import { NavigationStrategy } from '@kuzanatoliorg/chartjs-keyboard-plugin';
import { useChartContext } from '../ChartProvider';

describe('ChartSelectStrategy', () => {
  const renderComponent = (props: TMockUseChartContext = {}) => {
    mockUseChartContext(props);
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
    renderComponent();
    expect(onChangeStrategySpy).not.toHaveBeenCalled();
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      NavigationStrategy.DATA
    );
    expect(onChangeStrategySpy).toHaveBeenCalledWith(NavigationStrategy.DATA);
  });
});
