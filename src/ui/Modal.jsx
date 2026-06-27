import { FaTimes } from "react-icons/fa";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "w-[900px]",
  height = "h-[600px]",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className={`
          ${width}
          ${height}
          bg-card
          rounded-md
          shadow-modal
          flex flex-col
          overflow-hidden
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            px-6 py-4
            border-b border-border
          "
        >
          <h2 className="text-h4 font-semibold text-primary">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              p-2
              rounded-full
              text-secondary
              transition-colors
              hover:bg-hover
              hover:text-primary
            "
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
