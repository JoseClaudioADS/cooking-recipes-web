import { Header } from "@/layouts/components/app/header";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div>
      <Header />

      <div className="space-y-10 p-8">
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
