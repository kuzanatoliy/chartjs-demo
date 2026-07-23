import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { MultitypeLineStackedBarChart } from './MultitypeLineStackedBarChart';
import { options } from './options';

describe('MultitypeLineStackedBarChart', () => {
  const renderComponent = () => {
    return render(<MultitypeLineStackedBarChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
