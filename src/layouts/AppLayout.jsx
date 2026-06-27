import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar — fixed width, full height, never scrolls with content */}
      <aside className="w-64 flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Content — takes remaining width, scrolls independently */}
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;