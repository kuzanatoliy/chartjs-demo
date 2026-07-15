import { Grid } from '@mui/material';
import { VerticalBarChart } from '../VerticalBarChart';

export const Main = () => (
  <main>
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ justifyContent: 'center' }}
      >
        <VerticalBarChart />
        <VerticalBarChart />
        <VerticalBarChart />
        <VerticalBarChart />
        <VerticalBarChart />
        <VerticalBarChart />
      </Grid>
    </div>
  </main>
);
