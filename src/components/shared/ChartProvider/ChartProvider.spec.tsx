import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ChartProvider, type TChartProviderProps } from './ChartProvider';
import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import { useChartState } from './hooks';

vitest.mock('./hooks', async () => {
  const origin = await vitest.importActual<typeof import('./hooks')>('./hooks');
  return {
    ...origin,
    useChartState: vitest
      .fn()
      .mockImplementation((props) => origin.useChartState(props)),
  };
});

describe('ChartProvider', () => {
  const DEFAULT_PROPS: TChartProviderProps = {
    children: 'test chart provider',
  };

  const renderComponent = (props: Partial<TChartProviderProps> = {}) => {
    return render(<ChartProvider {...DEFAULT_PROPS} {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({ children: 'should render component' });
    expect(screen.getByText('should render component')).toBeDefined();
    expect(useChartState).toHaveBeenCalled();
  });

  it('Should render component with init strategy', () => {
    renderComponent({ 'init-strategy': ENavigationStrategy.DATASET_FIRST });
    expect(useChartState).toHaveBeenCalledWith(
      expect.objectContaining({
        'init-strategy': ENavigationStrategy.DATASET_FIRST,
      })
    );
  });
});
