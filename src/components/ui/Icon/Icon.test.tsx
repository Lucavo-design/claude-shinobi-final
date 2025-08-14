import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Icon from './Icon'

describe('Icon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders with default props', () => {
    render(<Icon>⭐</Icon>)
    const icon = screen.getByText('⭐')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('bg-primary')
    expect(icon).toHaveClass('w-12 h-12')
  })

  it('renders with different variants', () => {
    render(<Icon variant="danger">🔥</Icon>)
    const icon = screen.getByText('🔥')
    expect(icon).toHaveClass('bg-danger')
  })

  it('renders with different sizes', () => {
    render(<Icon size="lg">🚀</Icon>)
    const icon = screen.getByText('🚀')
    expect(icon).toHaveClass('w-16 h-16')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Icon onClick={handleClick}>💎</Icon>)
    
    fireEvent.click(screen.getByText('💎'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom className', () => {
    render(<Icon className="custom-class">⚡</Icon>)
    const icon = screen.getByText('⚡')
    expect(icon).toHaveClass('custom-class')
  })

  it('renders all variant styles correctly', () => {
    const { rerender } = render(<Icon variant="primary">🎯</Icon>)
    expect(screen.getByText('🎯')).toHaveClass('bg-primary')
    
    rerender(<Icon variant="secondary">🎯</Icon>)
    expect(screen.getByText('🎯')).toHaveClass('bg-secondary')
    
    rerender(<Icon variant="success">🎯</Icon>)
    expect(screen.getByText('🎯')).toHaveClass('bg-success')
    
    rerender(<Icon variant="warning">🎯</Icon>)
    expect(screen.getByText('🎯')).toHaveClass('bg-warning')
    
    rerender(<Icon variant="danger">🎯</Icon>)
    expect(screen.getByText('🎯')).toHaveClass('bg-danger')
  })

  it('renders all size styles correctly', () => {
    const { rerender } = render(<Icon size="sm">📱</Icon>)
    expect(screen.getByText('📱')).toHaveClass('w-8 h-8')
    
    rerender(<Icon size="md">📱</Icon>)
    expect(screen.getByText('📱')).toHaveClass('w-12 h-12')
    
    rerender(<Icon size="lg">📱</Icon>)
    expect(screen.getByText('📱')).toHaveClass('w-16 h-16')
  })
})