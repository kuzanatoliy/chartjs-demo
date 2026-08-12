import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Main } from './Main';

import { VerticalBarChart } from '../../features/VerticalBarChart';
import { HorizontalBarChart } from '../../features/HorizontalBarChart';
import { StackedBarChart } from '../../features/StackedBarChart';
import { GroupedBarChart } from '../../features/GroupedBarChart';
import { AreaChart } from '../../features/AreaChart';
import { MultiaxisAreaChart } from '../../features/MultiaxisAreaChart';
import { LineChart } from '../../features/LineChart';
import { MultiaxisLineChart } from '../../features/MultiaxisLineChart';
import { PieChart } from '../../features/PieChart';
import { DoughnutChart } from '../../features/DoughnutChart';
import { PolarAreaChart } from '../../features/PolarAreaChart';
import { RadarChart } from '../../features/RadarChart';
import { ScatterChart } from '../../features/ScatterChart';
import { BubbleChart } from '../../features/BubbleChart';
import { MultitypeLineBarChart } from '../../features/MultitypeLineBarChart';
import { MultitypeLineStackedBarChart } from '../../features/MultitypeLineStackedBarChart';

vitest.mock('../../features/VerticalBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/VerticalBarChart')
  >('../../features/VerticalBarChart');
  return {
    ...origin,
    VerticalBarChart: vitest
      .fn()
      .mockImplementation(() => <div>VerticalBarChart</div>),
  };
});

vitest.mock('../../features/HorizontalBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/HorizontalBarChart')
  >('../../features/HorizontalBarChart');
  return {
    ...origin,
    HorizontalBarChart: vitest
      .fn()
      .mockImplementation(() => <div>HorizontalBarChart</div>),
  };
});

vitest.mock('../../features/StackedBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/StackedBarChart')
  >('../../features/StackedBarChart');
  return {
    ...origin,
    StackedBarChart: vitest
      .fn()
      .mockImplementation(() => <div>StackedBarChart</div>),
  };
});

vitest.mock('../../features/GroupedBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/GroupedBarChart')
  >('../../features/GroupedBarChart');
  return {
    ...origin,
    GroupedBarChart: vitest
      .fn()
      .mockImplementation(() => <div>GroupedBarChart</div>),
  };
});

vitest.mock('../../features/AreaChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/AreaChart')
  >('../../features/AreaChart');
  return {
    ...origin,
    AreaChart: vitest.fn().mockImplementation(() => <div>AreaChart</div>),
  };
});

vitest.mock('../../features/MultiaxisAreaChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/MultiaxisAreaChart')
  >('../../features/MultiaxisAreaChart');
  return {
    ...origin,
    MultiaxisAreaChart: vitest
      .fn()
      .mockImplementation(() => <div>MultiaxisAreaChart</div>),
  };
});

vitest.mock('../../features/LineChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/LineChart')
  >('../../features/LineChart');
  return {
    ...origin,
    LineChart: vitest.fn().mockImplementation(() => <div>LineChart</div>),
  };
});

vitest.mock('../../features/MultiaxisLineChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/MultiaxisLineChart')
  >('../../features/MultiaxisLineChart');
  return {
    ...origin,
    MultiaxisLineChart: vitest
      .fn()
      .mockImplementation(() => <div>MultiaxisLineChart</div>),
  };
});

vitest.mock('../../features/PieChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/PieChart')
  >('../../features/PieChart');
  return {
    ...origin,
    PieChart: vitest.fn().mockImplementation(() => <div>PieChart</div>),
  };
});

vitest.mock('../../features/DoughnutChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/DoughnutChart')
  >('../../features/DoughnutChart');
  return {
    ...origin,
    DoughnutChart: vitest
      .fn()
      .mockImplementation(() => <div>DoughnutChart</div>),
  };
});

vitest.mock('../../features/PolarAreaChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/PolarAreaChart')
  >('../../features/PolarAreaChart');
  return {
    ...origin,
    PolarAreaChart: vitest
      .fn()
      .mockImplementation(() => <div>PolarAreaChart</div>),
  };
});

vitest.mock('../../features/RadarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/RadarChart')
  >('../../features/RadarChart');
  return {
    ...origin,
    RadarChart: vitest.fn().mockImplementation(() => <div>RadarChart</div>),
  };
});

vitest.mock('../../features/ScatterChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/ScatterChart')
  >('../../features/ScatterChart');
  return {
    ...origin,
    ScatterChart: vitest.fn().mockImplementation(() => <div>ScatterChart</div>),
  };
});

vitest.mock('../../features/BubbleChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/BubbleChart')
  >('../../features/BubbleChart');
  return {
    ...origin,
    BubbleChart: vitest.fn().mockImplementation(() => <div>BubbleChart</div>),
  };
});

vitest.mock('../../features/MultitypeLineBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/MultitypeLineBarChart')
  >('../../features/MultitypeLineBarChart');
  return {
    ...origin,
    MultitypeLineBarChart: vitest
      .fn()
      .mockImplementation(() => <div>MultitypeLineBarChart</div>),
  };
});

vitest.mock('../../features/MultitypeLineStackedBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../../features/MultitypeLineStackedBarChart')
  >('../../features/MultitypeLineStackedBarChart');
  return {
    ...origin,
    MultitypeLineStackedBarChart: vitest
      .fn()
      .mockImplementation(() => <div>MultitypeLineStackedBarChart</div>),
  };
});

describe('Main', () => {
  const renderComponent = () => {
    return render(<Main />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(VerticalBarChart).toHaveBeenCalled();
    expect(HorizontalBarChart).toHaveBeenCalled();
    expect(StackedBarChart).toHaveBeenCalled();
    expect(GroupedBarChart).toHaveBeenCalled();
    expect(AreaChart).toHaveBeenCalled();
    expect(MultiaxisAreaChart).toHaveBeenCalled();
    expect(LineChart).toHaveBeenCalled();
    expect(MultiaxisLineChart).toHaveBeenCalled();
    expect(PieChart).toHaveBeenCalled();
    expect(DoughnutChart).toHaveBeenCalled();
    expect(PolarAreaChart).toHaveBeenCalled();
    expect(RadarChart).toHaveBeenCalled();
    expect(ScatterChart).toHaveBeenCalled();
    expect(BubbleChart).toHaveBeenCalled();
    expect(MultitypeLineBarChart).toHaveBeenCalled();
    expect(MultitypeLineStackedBarChart).toHaveBeenCalled();
  });
});
