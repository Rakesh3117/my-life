import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const InLineDropDown = ({
  options = [],
  value,
  onChange,
  placeholder = "Select",
  width = "w-40",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const handleSelect = (option) => {
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-body hover:text-heading transition-colors"
      >
        <span>{value || placeholder}</span>

        <FaChevronDown
          size={12}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 top-full mt-2 ${width}
          bg-card
          border border-default
          rounded-lg
          shadow-modal
          z-50`}
        >
          <ul className="p-2">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() =>
                    handleSelect(option)
                  }
                  className={`
                    w-full
                    text-left
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    transition-colors
                    ${
                      value === option
                        ? "bg-primary/10 text-primary"
                        : "text-body hover:bg-neutral-secondary hover:text-heading"
                    }
                  `}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InLineDropDown;