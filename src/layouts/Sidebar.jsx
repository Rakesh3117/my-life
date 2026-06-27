import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { menuItems } from "../config/menuItems";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <aside className="h-full w-64 bg-sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto">
        {/* Logo */}
        <div className="pb-4 mb-4">
          <h2 className="text-xl font-bold text-primary">
            LifeOS
          </h2>
        </div>

        <hr className="border-border mb-4" />

        {/* Menu */}
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const MainMenuIcon = item.icon;
              const hasChildren = item.children?.length > 0;

              return (
                <li key={item.name}>
                  {!hasChildren ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `
                        flex items-center
                        gap-3
                        px-3 py-2.5
                        rounded-lg
                        text-sm font-medium
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-primary text-textPrimary"
                            : "text-textSecondary hover:bg-background hover:text-textPrimary"
                        }
                      `
                      }
                    >
                      <MainMenuIcon size={20} />
                      <span className="text-base">{item.name}</span>
                    </NavLink>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="
                          w-full
                          flex
                          items-center
                          justify-between
                          px-3
                          py-2.5
                          rounded-lg
                          text-sm
                          font-medium
                          text-textSecondary
                          hover:bg-background
                          hover:text-textPrimary
                          transition-all
                          duration-200
                        "
                      >
                        <div className="flex items-center gap-3">
                          <MainMenuIcon size={20} />
                          <span className="text-base">
                            {item.name}
                          </span>
                        </div>

                        {openMenus[item.name] ? (
                          <FiChevronDown size={18} />
                        ) : (
                          <FiChevronRight size={18} />
                        )}
                      </button>

                      {openMenus[item.name] && (
                        <ul className="ml-8 mt-1 space-y-1">
                          {item.children.map((child) => {
                            const ChildIcon = child.icon;

                            return (
                              <li key={child.path}>
                                <NavLink
                                  to={child.path}
                                  className={({ isActive }) =>
                                    `
                                    flex items-center
                                    gap-3
                                    px-3
                                    py-2
                                    rounded-md
                                    text-sm
                                    transition-all
                                    duration-200
                                    ${
                                      isActive
                                        ? "bg-primary text-textPrimary"
                                        : "text-textSecondary hover:bg-background hover:text-textPrimary"
                                    }
                                  `
                                  }
                                >
                                  {ChildIcon && (
                                    <ChildIcon size={16} />
                                  )}

                                  <span>{child.name}</span>
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;