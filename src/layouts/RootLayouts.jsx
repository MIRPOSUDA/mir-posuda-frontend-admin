import { Outlet } from "react-router-dom";
import MPSidebar from "../components/MPSidebar";
import Header from "../components/Header";
import MPDeleteCategoryConfirmationModal from "../components/MPDeleteCategoryConfirmationModal";
import MPAddNewCategoryModal from "../components/MPAddNewCategoryModal";
import MPUpdateCategoryModal from "../components/MPUpdateCategoryModal";
import MPAddNewAdminModal from "../components/MPAddNewAdminModal";
import MPDeleteAdminConfirmationModal from "../components/MPDeleteAdminConfirmationModal";

export default function RootLayouts() {
  return (
    <>
      <Header />
      <div className="fixed top-[60px] flex h-screen w-full">
        <MPSidebar />
        <main className="w-full overflow-y-auto rounded-tl-xl bg-gray-200 p-10 dark:bg-gray-500">
          <Outlet />
        </main>
      </div>

      {/* Modals */}
      <MPAddNewCategoryModal />
      <MPDeleteCategoryConfirmationModal />
      <MPUpdateCategoryModal />
      <MPAddNewAdminModal />
      <MPDeleteAdminConfirmationModal />
    </>
  );
}
