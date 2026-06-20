import { render, screen } from '@testing-library/react';

describe('JSX transformation test', () => {
  it('should render JSX', () => {
    render(<div>Hello World</div>);
    const element = screen.getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });
});