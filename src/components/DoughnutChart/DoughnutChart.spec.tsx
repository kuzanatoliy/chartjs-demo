import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { DoughnutChart } from './DoughnutChart';
import { options } from './options';

describe('DoughnutChart', () => {
  const renderComponent = () => {
    return render(<DoughnutChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
