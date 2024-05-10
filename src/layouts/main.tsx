import { Header } from "@/layouts/components/app/header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <Header />

      <div className="hidden space-y-10 p-8 md:block">
        <hr />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          <aside className="w-full">MENU</aside>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
