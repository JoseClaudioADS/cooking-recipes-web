import { Header } from "@/layouts/components/app/header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <Header />

      <div className="space-y-10 p-8">
        <hr />
        <div className="flex flex-row space-x-14">
          <aside className="w-60">MENU</aside>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
