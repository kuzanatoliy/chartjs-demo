import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Header } from './Header';

describe('Header', () => {
  const renderComponent = () => {
    return render(<Header />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText('ChartJS plugins introduction')).toBeDefined();
  });
});
