import { useTranslation } from "react-i18next";
import useCategory from "../hooks/useCategory";
import { useEffect, useState } from "react";
import MPCategoryTable from "../components/MPCategoryTable";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa6";
import { modalManager } from "../redux/slices/modals";
import { toast } from "sonner";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const { t } = useTranslation();
  const { getCategory } = useCategory();
  const dispatch = useDispatch();

  useEffect(() => {
    getCategory()
      .then((res) => {
        setCategories(res);
      })
      .catch(({ message }) => {
        toast.info(message);
        dispatch(setUser(null));
      });
  }, []);

  function handleModal() {
    dispatch(modalManager("addCategoryModal"));
  }

  return (
    <div className="flex flex-col">
      <div className="mb-5 flex justify-between">
        <h2 className="text-2xl font-bold">{t("categories")}</h2>
        <Button color="dark" onClick={handleModal}>
          <FaPlus className="mr-2 h-5 w-5" />
          {t("addCategory")}
        </Button>
      </div>
      <MPCategoryTable categories={categories} />
    </div>
  );
}
