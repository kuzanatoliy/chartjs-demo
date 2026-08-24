import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelectStrategy,
  ChartSelectDirection,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const ScatterChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATASET_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='scatter' options={options} data={data} />
      </ChartContainer>
      <ChartSelectStrategy />
      <ChartSelectDirection />
    </Card>
  </ChartProvider>
);
