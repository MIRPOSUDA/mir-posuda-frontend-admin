import { Outlet } from "react-router-dom";
import MPNavbar from "../components/MPNavbar";
import MPSidebar from "../components/MPSidebar";

export default function RootLayouts() {
  return (
    <>
      <MPNavbar />
      <div className="flex h-full">
        <MPSidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
