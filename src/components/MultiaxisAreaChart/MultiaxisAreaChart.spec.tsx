import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { MultiaxisAreaChart } from './MultiaxisAreaChart';
import { options } from './options';

describe('MultiaxisAreaChart', () => {
  const renderComponent = () => {
    return render(<MultiaxisAreaChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
