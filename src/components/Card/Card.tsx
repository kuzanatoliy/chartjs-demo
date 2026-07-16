import type { ReactNode } from 'react';
import styles from './Card.module.scss';

export interface ICard {
  children: ReactNode;
}

export const Card = (props: ICard) => (
  <div className={styles['card-container']}>{props.children}</div>
);
