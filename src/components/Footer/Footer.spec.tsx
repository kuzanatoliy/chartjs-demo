import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Footer } from './Footer';

describe('Footer', () => {
  const renderComponent = () => {
    return render(<Footer />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText('© Kuzanatoliorg'));
    expect(screen.getByRole('link', { name: 'Go to github' }));
    expect(screen.getByRole('link', { name: 'Go to linkedin' }));
  });
});
