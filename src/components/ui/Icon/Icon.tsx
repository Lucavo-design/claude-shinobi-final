interface IconProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

function Icon({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = ''
}: IconProps) {
  const baseClasses = 'rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95'
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl'
  }
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white dark:text-black hover:bg-secondary/90',
    success: 'bg-success text-white hover:bg-success/90',
    warning: 'bg-warning text-white hover:bg-warning/90',
    danger: 'bg-danger text-white hover:bg-danger/90'
  }

  const iconClass = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <div
      className={iconClass}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Icon