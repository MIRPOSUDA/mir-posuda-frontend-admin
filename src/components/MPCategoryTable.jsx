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
import { MdOutlineEdit, MdDelete, MdUnarchive } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import { setID } from "../redux/slices/delete-element-id";
import useCategory from "../hooks/useCategory";
import { toast } from "sonner";

export default function MPCategoryTable({ categories }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { handleArchiveCategory } = useCategory();

  function handleDelete(id) {
    dispatch(setID(id));
    dispatch(modalManager("deleteCategoryConfirmationModal"));
  }

  function handleArchive(id, mode) {
    toast.success("Arxivlandi");
    handleArchiveCategory(id, mode);
  }

  return (
    <div>
      <Table hoverable>
        <TableHead>
          <TableHeadCell>{t("id")}</TableHeadCell>
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
                    <Tooltip content={t(isActive ? "archive" : "unarchive")}>
                      <Button
                        onClick={() =>
                          handleArchive(id, isActive ? "archive" : "unarchive")
                        }
                        size="xs"
                        color={isActive ? "warning" : "success"}
                      >
                        {isActive ? <IoMdArchive /> : <MdUnarchive />}
                      </Button>
                    </Tooltip>
                    <Tooltip content={t("delete")}>
                      <Button
                        onClick={() => handleDelete(id)}
                        size="xs"
                        color="failure"
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
