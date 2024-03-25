import { Button, Card, Dropdown, Tooltip } from "flowbite-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdmin, getAdmins } from "../redux/slices/admins";
import { modalManager } from "../redux/slices/modals";
import AdminsGrid from "../components/AdminsGrid";

export default function Admins() {
  const { t } = useTranslation();
  const { data, loading } = useSelector((state) => state.adminsSlice);
  const dispatch = useDispatch();

  function handleModal() {
    dispatch(modalManager("addAdminModal"));
  }

  useEffect(() => {
    dispatch(getAdmins());
  }, []);

  return (
    <section className="flex flex-col">
      <div className="mb-5 flex justify-between">
        <h2 className="text-2xl font-bold">{t("admins")}</h2>
        <Button onClick={handleModal} color="dark">
          <FaPlus className="mr-2 h-5 w-5" />
          {t("addAdmin")}
        </Button>
      </div>
      <div className="relative">
        <AdminsGrid admins={data} loading={loading} />
      </div>
    </section>
  );
}
