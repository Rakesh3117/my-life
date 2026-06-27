const Card = ({ children, className = "", padding = "p-6" }) => {
  return (
    <div
      className={`
        bg-card
        rounded-lg
        shadow-card
        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
