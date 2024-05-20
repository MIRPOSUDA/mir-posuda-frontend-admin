import { Button, Card, Spinner, Tooltip } from "flowbite-react";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdArchive } from "react-icons/io";
import { MdDelete, MdUnarchive } from "react-icons/md";
import AdminAvatar from "/assets/admin.png";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { modalManager } from "../redux/slices/modals";

function AdminsGrid({ admins, loading }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function handleDelete(id) {
    localStorage.setItem("currentActionID", id);
    dispatch(modalManager("deleteAdminConfirmationModal"));
  }

  return (
    <>
      {!loading && admins && (
        <ul className="grid grid-cols-4 gap-5">
          {admins.map(({ id, firstName, phoneNumber, isActive }) => {
            return (
              <li key={id}>
                <Card>
                  <div className="flex flex-col items-center py-5">
                    <img
                      alt={firstName}
                      height="96"
                      src={AdminAvatar}
                      width="96"
                      className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 line-clamp-1 text-xl font-medium text-gray-900 dark:text-white">
                      {firstName}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {phoneNumber}
                    </span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                      <Tooltip content={t(isActive ? "archive" : "unarchive")}>
                        <Button
                          onClick={() => handleDelete(phoneNumber)}
                          color={isActive ? "warning" : "success"}
                          size="sm"
                        >
                          {isActive ? <IoMdArchive /> : <MdUnarchive />}
                        </Button>
                      </Tooltip>
                      <Tooltip content={t("info")}>
                        <Button
                          onClick={() => handleDelete(phoneNumber)}
                          color="purple"
                          size="sm"
                        >
                          <FaInfoCircle />
                        </Button>
                      </Tooltip>
                      <Tooltip content={t("delete")}>
                        <Button
                          onClick={() => handleDelete(id)}
                          color="failure"
                          size="sm"
                        >
                          <MdDelete />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
      {loading && (
        <div className="absolute left-2/4 top-24 flex -translate-x-2/4 select-none items-center gap-5">
          <Spinner />
          <span>{t("loading")}</span>
        </div>
      )}
    </>
  );
}

export default AdminsGrid;
