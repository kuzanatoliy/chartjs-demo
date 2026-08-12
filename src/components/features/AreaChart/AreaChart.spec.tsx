import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { AreaChart } from './AreaChart';
import { options } from './options';

describe('AreaChart', () => {
  const renderComponent = () => {
    return render(<AreaChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
