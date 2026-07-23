import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { StackedBarChart } from './StackedBarChart';
import { options } from './options';

describe('StackedBarChart', () => {
  const renderComponent = () => {
    return render(<StackedBarChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
