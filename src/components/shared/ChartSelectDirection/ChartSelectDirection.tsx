import { useCallback, useId, type ChangeEvent } from 'react';
import { useChartContext } from '../ChartProvider';
import { ENavigationDirection } from '../../../plugins/chartjs-keyboard-plugin';
import styles from './ChartSelectDirection.module.scss';

const directions = [ENavigationDirection.LTR, ENavigationDirection.RTL];

export const ChartSelectDirection = () => {
  const { direction, onChangeDirection } = useChartContext();
  const selectId = useId();

  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChangeDirection(event.target.value as ENavigationDirection);
    },
    [onChangeDirection]
  );

  return (
    <div>
      <label htmlFor={selectId}>Navigation direction:</label>{' '}
      <select
        id={selectId}
        onChange={changeHandler}
        className={styles['chartselectdirection-selector']}
        value={direction}
      >
        {directions.map((val) => (
          <option
            className={styles['chartselectdirection-option']}
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
