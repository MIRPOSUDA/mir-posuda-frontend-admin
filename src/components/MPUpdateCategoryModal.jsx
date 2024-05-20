import { Button, Modal, TextInput } from "flowbite-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import getFormData from "../utils/get-form-data";
import { editCategory, stateEditCategory } from "../redux/slices/categories";

function MPUpdateCategoryModal() {
  const { t } = useTranslation();
  const submitter = useRef(null);
  const dispatch = useDispatch();
  const { updateCategoryModal } = useSelector((state) => state.modalsSlice);
  const currentID = localStorage.getItem("currentActionID");

  function handleModal() {
    dispatch(modalManager("updateCategoryModal"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    data.id = currentID;
    dispatch(editCategory(data));
    dispatch(stateEditCategory(data));
    handleModal();
  }

  return (
    <Modal
      dismissible
      show={updateCategoryModal}
      onClose={handleModal}
      tabIndex={0}
    >
      <Modal.Header>{t("edit")}</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <TextInput
              minLength="3"
              addon={<span className="w-[95px] text-center">O'zbekcha</span>}
              name="nameUz"
              required
            />
          </div>
          <TextInput
            minLength="3"
            addon={<span className="w-[95px] text-center">Ўзбекча</span>}
            name="nameRu"
            required
          />
          <TextInput
            minLength="3"
            addon={<span className="w-[95px] text-center">Русский</span>}
            name="nameCr"
            required
          />
          <button className="sr-only" type="submit" ref={submitter}>
            {t("accept")}
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        <Button type="button" color="gray" onClick={handleModal}>
          {t("decline")}
        </Button>
        <Button
          className="w-36 text-center"
          type="button"
          onClick={() => {
            submitter.current.click();
          }}
        >
          {t("accept")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MPUpdateCategoryModal;
