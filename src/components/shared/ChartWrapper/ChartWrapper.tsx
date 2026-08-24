import type { ChartData, ChartOptions, ChartType } from 'chart.js';
import { useMemo } from 'react';
import { useChartContext } from '../ChartProvider';
import { Chart } from 'react-chartjs-2';
import { ENavigationDirection } from '../../../plugins/chartjs-keyboard-plugin';

export type TChartWrapperProps<
  TOptions extends ChartOptions,
  TData extends ChartData,
> = {
  options: TOptions;
  data: TData;
  type: ChartType;
};

export const ChartWrapper = <
  TOptions extends ChartOptions,
  TData extends ChartData,
>(
  props: TChartWrapperProps<TOptions, TData>
) => {
  const { strategy, direction } = useChartContext();

  const localOptions = useMemo(() => {
    const isRtl = direction === ENavigationDirection.RTL;
    return {
      ...props.options,
      plugins: {
        ...props.options.plugins,
        legend: {
          ...props.options.plugins?.legend,
          rtl: isRtl,
          textDirection: direction,
        },
        tooltip: {
          ...props.options.plugins?.tooltip,
          rtl: isRtl,
          textDirection: direction,
        },
        title: {
          ...props.options.plugins?.title,
          textDirection: direction,
        },
        chartjsKeyboardPlugin: {
          strategy,
          direction,
        },
      },
      scales: {
        ...props.options.scales,
        y: {
          ...props.options.scales?.y,
          position: isRtl ? 'right' : 'left',
        },
        x: {
          ...props.options.scales?.x,
          reverse: isRtl,
        },
      },
    };
  }, [props.options, strategy, direction]);

  return (
    <Chart
      {...props}
      key={`${strategy}|${direction}`}
      options={localOptions}
      role='img'
      aria-label={localOptions.plugins?.title?.text?.toString()}
    />
  );
};
