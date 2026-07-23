import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Main } from './Main';

import { VerticalBarChart } from '../VerticalBarChart';
import { HorizontalBarChart } from '../HorizontalBarChart';
import { StackedBarChart } from '../StackedBarChart';
import { GroupedBarChart } from '../GroupedBarChart';
import { AreaChart } from '../AreaChart';
import { MultiaxisAreaChart } from '../MultiaxisAreaChart';
import { LineChart } from '../LineChart';
import { MultiaxisLineChart } from '../MultiaxisLineChart';
import { PieChart } from '../PieChart';
import { DoughnutChart } from '../DoughnutChart';
import { PolarAreaChart } from '../PolarAreaChart';
import { RadarChart } from '../RadarChart';
import { ScatterChart } from '../ScatterChart';
import { BubbleChart } from '../BubbleChart';
import { MultitypeLineBarChart } from '../MultitypeLineBarChart';
import { MultitypeLineStackedBarChart } from '../MultitypeLineStackedBarChart';

vitest.mock('../VerticalBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../VerticalBarChart')
  >('../VerticalBarChart');
  return {
    ...origin,
    VerticalBarChart: vitest
      .fn()
      .mockImplementation(() => <div>VerticalBarChart</div>),
  };
});

vitest.mock('../HorizontalBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../HorizontalBarChart')
  >('../HorizontalBarChart');
  return {
    ...origin,
    HorizontalBarChart: vitest
      .fn()
      .mockImplementation(() => <div>HorizontalBarChart</div>),
  };
});

vitest.mock('../StackedBarChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../StackedBarChart')>(
      '../StackedBarChart'
    );
  return {
    ...origin,
    StackedBarChart: vitest
      .fn()
      .mockImplementation(() => <div>StackedBarChart</div>),
  };
});

vitest.mock('../GroupedBarChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../GroupedBarChart')>(
      '../GroupedBarChart'
    );
  return {
    ...origin,
    GroupedBarChart: vitest
      .fn()
      .mockImplementation(() => <div>GroupedBarChart</div>),
  };
});

vitest.mock('../AreaChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../AreaChart')>('../AreaChart');
  return {
    ...origin,
    AreaChart: vitest.fn().mockImplementation(() => <div>AreaChart</div>),
  };
});

vitest.mock('../MultiaxisAreaChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../MultiaxisAreaChart')
  >('../MultiaxisAreaChart');
  return {
    ...origin,
    MultiaxisAreaChart: vitest
      .fn()
      .mockImplementation(() => <div>MultiaxisAreaChart</div>),
  };
});

vitest.mock('../LineChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../LineChart')>('../LineChart');
  return {
    ...origin,
    LineChart: vitest.fn().mockImplementation(() => <div>LineChart</div>),
  };
});

vitest.mock('../MultiaxisLineChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../MultiaxisLineChart')
  >('../MultiaxisLineChart');
  return {
    ...origin,
    MultiaxisLineChart: vitest
      .fn()
      .mockImplementation(() => <div>MultiaxisLineChart</div>),
  };
});

vitest.mock('../PieChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../PieChart')>('../PieChart');
  return {
    ...origin,
    PieChart: vitest.fn().mockImplementation(() => <div>PieChart</div>),
  };
});

vitest.mock('../DoughnutChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../DoughnutChart')>(
      '../DoughnutChart'
    );
  return {
    ...origin,
    DoughnutChart: vitest
      .fn()
      .mockImplementation(() => <div>DoughnutChart</div>),
  };
});

vitest.mock('../PolarAreaChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../PolarAreaChart')>(
      '../PolarAreaChart'
    );
  return {
    ...origin,
    PolarAreaChart: vitest
      .fn()
      .mockImplementation(() => <div>PolarAreaChart</div>),
  };
});

vitest.mock('../RadarChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../RadarChart')>('../RadarChart');
  return {
    ...origin,
    RadarChart: vitest.fn().mockImplementation(() => <div>RadarChart</div>),
  };
});

vitest.mock('../ScatterChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../ScatterChart')>(
      '../ScatterChart'
    );
  return {
    ...origin,
    ScatterChart: vitest.fn().mockImplementation(() => <div>ScatterChart</div>),
  };
});

vitest.mock('../BubbleChart', async () => {
  const origin =
    await vitest.importActual<typeof import('../BubbleChart')>(
      '../BubbleChart'
    );
  return {
    ...origin,
    BubbleChart: vitest.fn().mockImplementation(() => <div>BubbleChart</div>),
  };
});

vitest.mock('../MultitypeLineBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../MultitypeLineBarChart')
  >('../MultitypeLineBarChart');
  return {
    ...origin,
    MultitypeLineBarChart: vitest
      .fn()
      .mockImplementation(() => <div>MultitypeLineBarChart</div>),
  };
});

vitest.mock('../MultitypeLineStackedBarChart', async () => {
  const origin = await vitest.importActual<
    typeof import('../MultitypeLineStackedBarChart')
  >('../MultitypeLineStackedBarChart');
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
