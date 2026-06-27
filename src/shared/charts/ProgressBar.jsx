
const ProgressBar = ({
  percentage = 0,
  name = "",
  color = "primary",
  height = "h-3",
  showName = true,
  showPercentage = true,
}) => {
  const progress = Math.min(
    Math.max(percentage, 0),
    100
  );

  return (
    <div className="w-full">
      {(showName || showPercentage) && (
        <div className="mb-1 flex items-center justify-between">
          {showName ? (
            <span className="text-small font-bold">
              {name}
            </span>
          ) : (
            <span />
          )}

          {showPercentage && (
            <span className={`text-small text-${color}`}>
              {progress}%
            </span>
          )}
        </div>
      )}

      <div
        className={`
          w-full
          overflow-hidden
          rounded-full
          bg-background
          ${height}
        `}
      >
        <div
          className={`
            h-full
            rounded-full
            transition-all
            duration-500
            bg-${color}
          `}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
