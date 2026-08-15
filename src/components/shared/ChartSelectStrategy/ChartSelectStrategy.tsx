import { useCallback, useId, type ChangeEvent } from 'react';
import { useChartContext } from '../ChartProvider';
import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import styles from './ChartSelectStrategy.module.scss';

const strategies = [
  ENavigationStrategy.BALANCE,
  ENavigationStrategy.DATA,
  ENavigationStrategy.DATASET,
  ENavigationStrategy.DATASET_FIRST,
  ENavigationStrategy.DATA_FIRST,
];

export const ChartSelectStrategy = () => {
  const { strategy, onChangeStrategy } = useChartContext();
  const selectId = useId();
  console.log(strategy);

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChangeStrategy(event.target.value as ENavigationStrategy);
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
