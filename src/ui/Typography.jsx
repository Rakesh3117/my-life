export const Heading = ({ children, className = "" }) => (
  <h1 className={`text-3xl font-bold text-primary ${className}`}>
    {children}
  </h1>
);

export const SubHeading = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-semibold text-primary ${className}`}>
    {children}
  </h2>
);

export const SectionTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-medium text-primary ${className}`}>
    {children}
  </h3>
);

export const BodyText = ({ children, className = "" }) => (
  <p className={`text-base text-textPrimary ${className}`}>
    {children}
  </p>
);

export const Caption = ({ children, className = "" }) => (
  <span className={`text-sm text-textSecondary ${className}`}>
    {children}
  </span>
);