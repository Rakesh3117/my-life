const variants = {
  primary: `
    bg-primary
    text-white
    hover:opacity-90
  `,

  secondary: `
    bg-secondary
    text-white
    hover:opacity-90
  `,

  outline: `
    border
    border-border
    bg-transparent
    text-primary
    hover:bg-hover
  `,

  ghost: `
    bg-transparent
    text-primary
    hover:bg-hover
  `,

  danger: `
    bg-error
    text-white
    hover:opacity-90
  `,
};

const sizes = {
  sm: "h-9 px-3 text-small",
  md: "h-11 px-4 text-body",
  lg: "h-12 px-6 text-body",
};

const PrimaryButton = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-medium
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        hover:cursor-pointer

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default PrimaryButton;
