import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { MultiaxisLineChart } from './MultiaxisLineChart';
import { options } from './options';

describe('MultiaxisLineChart', () => {
  const renderComponent = () => {
    return render(<MultiaxisLineChart />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByLabelText(options.plugins.title.text)).toBeDefined();
  });
});
