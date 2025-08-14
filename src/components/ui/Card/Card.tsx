interface CardProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

function Card({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  className = '',
  onClick
}: CardProps) {
  const baseClasses = 'rounded-xl border-2 bg-surface shadow-md transition-all duration-200 outline-none focus:ring-3 disabled:opacity-60 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'border-primary/20 hover:border-primary/40 focus:ring-primary/30 hover:shadow-lg',
    secondary: 'border-secondary/20 hover:border-secondary/40 focus:ring-secondary/30 hover:shadow-lg',
    success: 'border-success/20 hover:border-success/40 focus:ring-success/30 hover:shadow-lg',
    warning: 'border-warning/20 hover:border-warning/40 focus:ring-warning/30 hover:shadow-lg',
    danger: 'border-danger/20 hover:border-danger/40 focus:ring-danger/30 hover:shadow-lg'
  }

  const sizeClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  }

  const cardClass = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    onClick ? 'cursor-pointer hover:transform hover:-translate-y-1' : '',
    disabled ? 'cursor-not-allowed' : '',
    className
  ].filter(Boolean).join(' ')

  const CardElement = onClick ? 'button' : 'div'

  return (
    <CardElement
      className={cardClass}
      onClick={disabled ? undefined : onClick}
      disabled={onClick && disabled}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </CardElement>
  )
}

export default Card