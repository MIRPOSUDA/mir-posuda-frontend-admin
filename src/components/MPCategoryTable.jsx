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
import {
  handleArchiveCategory,
  stateHandleArchiveCategory,
} from "../redux/slices/categories";
import { TbArrowsSort } from "react-icons/tb";

export default function MPCategoryTable({ categories, loading }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleEdit(id) {
    localStorage.setItem("currentActionID", id);
    dispatch(modalManager("updateCategoryModal"));
  }

  function handleDelete(id) {
    localStorage.setItem("currentActionID", id);
    dispatch(modalManager("deleteCategoryConfirmationModal"));
  }

  function handleArchive(id, mode) {
    const data = { id, mode };
    dispatch(handleArchiveCategory(data));
    dispatch(stateHandleArchiveCategory(data));
  }

  return (
    <div className="relative">
      <Table hoverable>
        <TableHead>
          <TableHeadCell className="w-1/4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="flex items-center justify-between">
              {t("id")}
              <TbArrowsSort />
            </span>
          </TableHeadCell>
          <TableHeadCell className="w-1/4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="flex items-center justify-between">
              {t("categories")}
              <TbArrowsSort />
            </span>
          </TableHeadCell>
          <TableHeadCell className="w-1/4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
            <span className="flex items-center justify-between">
              {t("status")}
              <TbArrowsSort />
            </span>
          </TableHeadCell>
          <Table.HeadCell className="w-1/4 text-right">
            <span className="">{t("edit")}</span>
          </Table.HeadCell>
        </TableHead>
        <TableBody className="relative divide-y">
          {!loading &&
            categories &&
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
                      <Button onClick={() => handleEdit(id)} size="xs">
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
            })}
        </TableBody>
      </Table>
      {loading && (
        <div className="absolute left-2/4 top-24 flex -translate-x-2/4 select-none items-center gap-5">
          <Spinner />
          <span>{t("loading")}</span>
        </div>
      )}
      {!loading && categories?.length === 0 && (
        <span className="absolute left-2/4 top-24 flex -translate-x-2/4 select-none items-center gap-5">
          {t("noCategories")}
        </span>
      )}
    </div>
  );
}
