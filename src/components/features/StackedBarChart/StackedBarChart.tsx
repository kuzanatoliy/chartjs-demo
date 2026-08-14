import { ENavigationStrategy } from '../../../plugins/chartjs-keyboard-plugin';
import {
  Card,
  ChartContainer,
  ChartProvider,
  ChartWrapper,
  ChartSelect,
} from '../../shared';
import { data } from './data';
import { options } from './options';

export const StackedBarChart = () => (
  <ChartProvider init-strategy={ENavigationStrategy.DATASET_FIRST}>
    <Card>
      <ChartContainer>
        <ChartWrapper type='bar' options={options} data={data} />
      </ChartContainer>
      <ChartSelect />
    </Card>
  </ChartProvider>
);
