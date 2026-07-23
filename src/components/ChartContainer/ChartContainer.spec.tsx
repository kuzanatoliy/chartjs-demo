import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ChartContainer } from './ChartContainer';

describe('ChartContainer', () => {
  const renderComponent = (props: { text: string }) => {
    return render(<ChartContainer>{props.text}</ChartContainer>);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({ text: 'content' });
    expect(screen.getByText('content'));
  });
});
