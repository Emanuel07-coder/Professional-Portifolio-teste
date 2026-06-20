import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('inline-flex');
  });

  it('renders as span when asChild is true', () => {
    render(<Button asChild>Click me</Button>);
    const spanElement = screen.getByText('Click me');
    expect(spanElement.tagName).toBe('SPAN');
    expect(spanElement.tagName).not.toBe('BUTTON');
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="destructive">Delete</Button>);
    const buttonElement = screen.getByRole('button', { name: /delete/i });
    expect(buttonElement).toHaveClass('bg-destructive');
  });

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large</Button>);
    const buttonElement = screen.getByRole('button', { name: /large/i });
    expect(buttonElement).toHaveClass('h-11');
  });

  it('accepts and forwards props correctly', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    buttonElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});