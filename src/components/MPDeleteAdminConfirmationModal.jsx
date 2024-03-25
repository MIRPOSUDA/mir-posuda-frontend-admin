import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import { useTranslation } from "react-i18next";
import { deleteAdmin } from "../redux/slices/admins";

export default function MPDeleteAdminConfirmationModal() {
  const dispatch = useDispatch();
  const { deleteAdminConfirmationModal } = useSelector(
    (state) => state.modalsSlice,
  );
  const { currentID } = useSelector((state) => state.currentActionIDSlice);

  const { t } = useTranslation();

  function handleModal() {
    dispatch(modalManager("deleteAdminConfirmationModal"));
  }

  function handleDelete() {
    dispatch(deleteAdmin(currentID));
    handleModal();
  }

  return (
    <>
      <Modal
        onClose={handleModal}
        show={deleteAdminConfirmationModal}
        dismissible
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {t("deleteCategoryConfirmation")}
            </h3>
            <div className="flex justify-center gap-4">
              <Button onClick={handleDelete} color="failure">
                {t("accept")}
              </Button>
              <Button onClick={handleModal} color="gray">
                {t("decline")}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
