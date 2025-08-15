import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Modal from './Modal'

describe('Modal', () => {
  const mockOnClose = vi.fn()

  afterEach(() => {
    cleanup()
    mockOnClose.mockClear()
    document.body.style.overflow = 'unset'
  })

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders with different variants', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} variant="danger">
        <p>Danger modal</p>
      </Modal>
    )
    
    const modal = screen.getByRole('dialog').firstChild as HTMLElement
    expect(modal).toHaveClass('border-danger')
  })

  it('renders with different sizes', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} size="lg">
        <p>Large modal</p>
      </Modal>
    )
    
    const modal = screen.getByRole('dialog').firstChild as HTMLElement
    expect(modal).toHaveClass('max-w-2xl')
  })

  it('renders with title', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'modal-title')
  })

  it('calls onClose when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    )
    
    fireEvent.click(screen.getByLabelText('Close modal'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    fireEvent.click(screen.getByRole('dialog'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose when modal content is clicked', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    fireEvent.click(screen.getByText('Modal content'))
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('calls onClose when Escape key is pressed', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  it('hides close button when showCloseButton is false', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test" showCloseButton={false}>
        <p>Modal content</p>
      </Modal>
    )
    
    expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} className="custom-class">
        <p>Modal content</p>
      </Modal>
    )
    
    const modal = screen.getByRole('dialog').firstChild as HTMLElement
    expect(modal).toHaveClass('custom-class')
  })

  it('sets body overflow to hidden when open', () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose}>
        <p>Modal content</p>
      </Modal>
    )
    
    expect(document.body.style.overflow).toBe('hidden')
  })
})