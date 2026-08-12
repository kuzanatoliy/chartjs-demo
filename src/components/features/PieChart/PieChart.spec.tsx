import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { PieChart } from './PieChart';
import { options } from './options';

describe('PieChart', () => {
  const renderComponent = () => {
    return render(<PieChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
