import { useCallback, useId, type ChangeEvent } from 'react';
import {
  NavigationStrategy,
  type TNavigationStrategy,
} from '@kuzanatoliorg/chartjs-keyboard-plugin';

import { useChartContext } from '../ChartProvider';
import styles from './ChartSelectStrategy.module.scss';

const strategies = [
  NavigationStrategy.BALANCE,
  NavigationStrategy.DATA,
  NavigationStrategy.DATASET,
  NavigationStrategy.DATASET_FIRST,
  NavigationStrategy.DATA_FIRST,
];

export const ChartSelectStrategy = () => {
  const { strategy, onChangeStrategy } = useChartContext();
  const selectId = useId();

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChangeStrategy(event.target.value as TNavigationStrategy);
    },
    [onChangeStrategy]
  );

  return (
    <div>
      <label htmlFor={selectId}>Navigation strategy:</label>{' '}
      <select
        id={selectId}
        onChange={changeHandler}
        className={styles['chartselectstrategy-selector']}
        value={strategy}
      >
        {strategies.map((val) => (
          <option
            className={styles['chartselectstrategy-option']}
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
