import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { GroupedBarChart } from './GroupedBarChart';
import { options } from './options';

describe('GroupedBarChart', () => {
  const renderComponent = () => {
    return render(<GroupedBarChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
