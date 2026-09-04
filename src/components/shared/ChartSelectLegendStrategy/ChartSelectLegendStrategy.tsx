import { useCallback, useId, type ChangeEvent } from 'react';
import {
  NavigationStrategy as LegendNavigationStrategy,
  type TNavigationStrategy as TLegendNavigationStrategy,
} from '@kuzanatoliorg/chartjs-legend-keyboard-plugin';

import { useChartContext } from '../ChartProvider';
import styles from './ChartSelectLegendStrategy.module.scss';

const strategies = [
  LegendNavigationStrategy.BOTH,
  LegendNavigationStrategy.HORIZONTAL,
  LegendNavigationStrategy.VERTICAL,
];

export const ChartSelectLegendStrategy = () => {
  const { legendStrategy, onChangeLegendStrategy } = useChartContext();
  const selectId = useId();

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChangeLegendStrategy(event.target.value as TLegendNavigationStrategy);
    },
    [onChangeLegendStrategy]
  );

  return (
    <div>
      <label htmlFor={selectId}>Legend strategy:</label>{' '}
      <select
        id={selectId}
        onChange={changeHandler}
        className={styles['chartselectlegendstrategy-selector']}
        value={legendStrategy}
      >
        {strategies.map((val) => (
          <option
            className={styles['chartselectlegendstrategy-option']}
            key={val}
            value={val}
          >
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};
