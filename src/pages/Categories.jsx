import { useTranslation } from "react-i18next";
import MPCategoryTable from "../components/MPCategoryTable";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa6";
import { modalManager } from "../redux/slices/modals";
import { getCategory } from "../redux/slices/categories";
import { useEffect } from "react";

export default function Categories() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  const { data, loading } = useSelector((state) => state.categoriesSlice);
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
      <MPCategoryTable categories={data} loading={loading} />
    </div>
  );
}
