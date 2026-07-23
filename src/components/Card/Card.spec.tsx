import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Card } from './Card';

describe('Card', () => {
  const renderComponent = (props: { text: string }) => {
    return render(<Card>{props.text}</Card>);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({ text: 'content' });
    expect(screen.getByText('content')).toBeDefined();
  });
});
