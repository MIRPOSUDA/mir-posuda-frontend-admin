import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa6";

export default function Admins() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{t("admins")}</h2>
        <Button color="dark">
          <FaPlus className="mr-2 h-5 w-5" />
          Admin qo'shish
        </Button>
      </div>
    </section>
  );
}
