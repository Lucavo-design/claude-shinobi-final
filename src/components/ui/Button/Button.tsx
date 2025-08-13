interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md font-medium cursor-pointer transition-all duration-200 outline-none focus:ring-3 disabled:opacity-60 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/80 focus:ring-primary/30',
    secondary: 'bg-secondary text-white dark:text-black hover:bg-secondary/80 focus:ring-secondary/30',
    success: 'bg-success text-white hover:bg-success/80 focus:ring-success/30',
    warning: 'bg-warning text-white hover:bg-warning/80 focus:ring-warning/30',
    danger: 'bg-danger text-white hover:bg-danger/80 focus:ring-danger/30'
  }

  const buttonClass = [
    baseClasses,
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button