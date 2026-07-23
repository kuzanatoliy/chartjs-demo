import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { VerticalBarChart } from './VerticalBarChart';
import { options } from './options';

describe('VerticalBarChart', () => {
  const renderComponent = () => {
    return render(<VerticalBarChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
