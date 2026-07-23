import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { HorizontalBarChart } from './HorizontalBarChart';
import { options } from './options';

describe('HorizontalBarChart', () => {
  const renderComponent = () => {
    return render(<HorizontalBarChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
