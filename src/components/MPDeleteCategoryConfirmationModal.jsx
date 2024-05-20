import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import { useTranslation } from "react-i18next";
import {
  deleteCategory,
  stateDeleteCategory,
} from "../redux/slices/categories";

export default function MPDeleteCategoryConfirmationModal() {
  const dispatch = useDispatch();
  const { deleteCategoryConfirmationModal } = useSelector(
    (state) => state.modalsSlice,
  );

  const { t } = useTranslation();

  function handleModal() {
    dispatch(modalManager("deleteCategoryConfirmationModal"));
  }

  function handleDelete() {
    const currentID = localStorage.getItem("currentActionID");
    dispatch(deleteCategory(currentID));
    dispatch(stateDeleteCategory(currentID));
    handleModal();
  }

  return (
    <>
      <Modal
        onClose={handleModal}
        show={deleteCategoryConfirmationModal}
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
