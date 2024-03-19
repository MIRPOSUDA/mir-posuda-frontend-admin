import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tooltip,
} from "flowbite-react";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { useTranslation } from "react-i18next";
import useCategory from "../hooks/useCategory";
import { useDispatch } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import MPCategoryModal from "./MPCategoryModal";
import MPCategoryConfirmationModal from "./MPCategoryConfirmationModal";

export default function MPCategoryTable({ categories }) {
  const { t } = useTranslation();
  const { deleteCategory } = useCategory();
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(modalManager("deleteCategoryConfirmationModal"));
    // deleteCategory(id)
    //   .then((res) => {
    //     toast.success("Kategoriya o'chirildi");
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //     console.error(error);
    //   });
  }

  return (
    <div>
      <Table hoverable>
        <TableHead>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>{t("categories")}</TableHeadCell>
          <TableHeadCell>{t("status")}</TableHeadCell>
          <Table.HeadCell>
            <span className="sr-only">{t("edit")}</span>
          </Table.HeadCell>
        </TableHead>
        <TableBody className="relative divide-y">
          {categories ? (
            categories.map(({ name, id, isActive }) => {
              return (
                <TableRow
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={id}
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {id}
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    {isActive ? t("active") : t("noActive")}
                  </TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <Tooltip content={t("edit")}>
                      <Button size="xs">
                        <MdOutlineEdit />
                      </Button>
                    </Tooltip>
                    <Tooltip content={t("archieve")}>
                      <Button size="xs" color="warning">
                        <IoMdArchive />
                      </Button>
                    </Tooltip>
                    <Tooltip content={t("delete")}>
                      <Button
                        size="xs"
                        color="failure"
                        onClick={() => handleDelete(id)}
                      >
                        <MdDelete />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <div className="absolute left-2/4 top-16 flex -translate-x-2/4 select-none items-center gap-5">
              <Spinner />
              <span>{t("loading")}</span>
            </div>
          )}
          {categories?.length === 0 && (
            <span className="absolute left-2/4 top-16 flex -translate-x-2/4 select-none items-center gap-5">
              {t("noCategories")}
            </span>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
