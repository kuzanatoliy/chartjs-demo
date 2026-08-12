import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { PolarAreaChart } from './PolarAreaChart';
import { options } from './options';

describe('PolarAreaChart', () => {
  const renderComponent = () => {
    return render(<PolarAreaChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
