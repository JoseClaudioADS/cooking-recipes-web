import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      Main Layout
      <Outlet />
    </div>
  );
}
