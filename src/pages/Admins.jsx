import { Button, Card, Dropdown } from "flowbite-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getAdmins } from "../redux/slices/admins";
import AdminAvatar from "/assets/admin.png";

export default function Admins() {
  const { t } = useTranslation();
  const { data } = useSelector((state) => state.adminsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmins());
    console.log(data);
  }, []);

  return (
    <section className="flex flex-col">
      <div className="mb-5 flex justify-between">
        <h2 className="text-2xl font-bold">{t("admins")}</h2>
        <Button color="dark">
          <FaPlus className="mr-2 h-5 w-5" />
          Admin qo'shish
        </Button>
      </div>
      <ul className="grid grid-cols-3 gap-5">
        {data?.map((admin) => {
          return (
            <li>
              <Card className="max-w-sm">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    alt="Bonnie image"
                    height="96"
                    src={AdminAvatar}
                    width="96"
                    className="mb-3 rounded-full shadow-lg"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {admin.firstName}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {admin.phoneNumber}
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <Button color="failure">{t("delete")}</Button>
                    <Button color="dark">Ma'lumot olish</Button>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
