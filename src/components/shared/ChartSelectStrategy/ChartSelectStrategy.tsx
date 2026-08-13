import { useContext, useCallback, useId, type ChangeEvent } from 'react';
import { ChartContext } from '../ChartProvider';
import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import styles from './ChartSelectStrategy.module.scss';

const strategies = [
  ENavigationStrategy.BALANCE,
  ENavigationStrategy.DATA,
  ENavigationStrategy.DATASET,
  ENavigationStrategy.DATASET_FIRST,
  ENavigationStrategy.DATA_FIRST,
];

export const ChartSelect = () => {
  const { strategy, onChangeStrategy } = useContext(ChartContext);
  const selectId = useId();

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
        className={styles['chartselect-selector']}
      >
        {strategies.map((val) => (
          <option
            className={styles['chartselect-option']}
            key={val}
            value={val}
            selected={strategy === val}
          >
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};
