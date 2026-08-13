import type { ChartData, ChartOptions, ChartType } from 'chart.js';
import { useContext, useMemo } from 'react';
import { ChartContext } from '../ChartProvider';
import { Chart } from 'react-chartjs-2';

export type TChartWrapper<
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
  props: TChartWrapper<TOptions, TData>
) => {
  const { strategy } = useContext(ChartContext);

  const localOptions = useMemo(
    () => ({
      ...props.options,
      plugins: {
        ...props.options.plugins,
        chartjsKeyboardPlugin: {
          strategy,
        },
      },
    }),
    [props.options, strategy]
  );

  return (
    <Chart
      {...props}
      options={localOptions}
      role='img'
      aria-label={localOptions.plugins?.title?.text?.toString()}
    />
  );
};
