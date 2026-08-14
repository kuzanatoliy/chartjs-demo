import { useContext } from 'react';
import { ChartContext } from '../ChartContext';

export const useChartContext = () => useContext(ChartContext);
