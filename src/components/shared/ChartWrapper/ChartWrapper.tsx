import type { ChartOptions } from 'chart.js';
import { useContext, useMemo, type ReactNode } from 'react';
import { ChartContext } from '../ChartProvider';

export type TChartWrapper<TOptions extends ChartOptions, TData> = {
  Component: (props: {
    options: TOptions;
    data: TData;
    role?: string;
  }) => ReactNode;
  options: TOptions;
  data: TData;
};

export const ChartWrapper = <TOptions extends ChartOptions, TData>(
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
    <props.Component
      options={localOptions}
      data={props.data}
      role='img'
      aria-label={props.options.plugins?.title?.text}
    />
  );
};
