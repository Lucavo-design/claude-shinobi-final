import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Card from './Card'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText(/card content/i)
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('border-primary/20')
    expect(card).toHaveClass('p-6')
  })

  it('renders with different variants', () => {
    render(<Card variant="danger">Delete card</Card>)
    const card = screen.getByText(/delete card/i)
    expect(card).toHaveClass('border-danger/20')
  })

  it('renders with different sizes', () => {
    render(<Card size="sm">Small card</Card>)
    const card = screen.getByText(/small card/i)
    expect(card).toHaveClass('p-3')
  })

  it('renders with large size', () => {
    render(<Card size="lg">Large card</Card>)
    const card = screen.getByText(/large card/i)
    expect(card).toHaveClass('p-8')
  })

  it('calls onClick when clicked and clickable', () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>Clickable card</Card>)
    
    fireEvent.click(screen.getByRole('button', { name: /clickable card/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick} disabled>Disabled card</Card>)
    
    fireEvent.click(screen.getByRole('button', { name: /disabled card/i }))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom card</Card>)
    const card = screen.getByText(/custom card/i)
    expect(card).toHaveClass('custom-class')
  })

  it('renders as div when no onClick is provided', () => {
    render(<Card>Static card</Card>)
    const card = screen.getByText(/static card/i)
    expect(card.tagName).toBe('DIV')
  })

  it('renders as button when onClick is provided', () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>Clickable card</Card>)
    const card = screen.getByRole('button', { name: /clickable card/i })
    expect(card.tagName).toBe('BUTTON')
  })
})