import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import {
  type TMockUseChartContext,
  mockUseChartContext,
  onChangeLegendStrategySpy,
} from '../ChartProvider/test-utils/use-chart-context';
import { ChartSelectLegendStrategy } from './ChartSelectLegendStrategy';
import { NavigationStrategy as LegendNavigationStrategy } from '../../../plugins/chartjs-legend-keyboard-plugin/constants';
import { useChartContext } from '../ChartProvider';

describe('ChartSelectLegendStrategy', () => {
  const renderComponent = (props: TMockUseChartContext = {}) => {
    mockUseChartContext(props);
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
    renderComponent();
    expect(onChangeLegendStrategySpy).not.toHaveBeenCalled();
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      LegendNavigationStrategy.HORIZONTAL
    );
    expect(onChangeLegendStrategySpy).toHaveBeenCalledWith(
      LegendNavigationStrategy.HORIZONTAL
    );
  });
});
