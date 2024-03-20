import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import getFormData from "../utils/get-form-data";
import useCategory from "../hooks/useCategory";
import { toast } from "sonner";

export default function MPCategoryModal() {
  const [loading, setLoading] = useState(false);
  const { addCategoryModal } = useSelector((state) => state.modalsSlice);
  const { addCategory } = useCategory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const submitter = useRef(null);
  function handleModal() {
    dispatch(modalManager("addCategoryModal"));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    setLoading(true);
    addCategory(data)
      .then((res) => {
        setLoading(false);
        toast.success(t("toastifyNewCategoryAddedSucces"));
        dispatch(modalManager("addCategoryModal"));
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error(error.message);
      });
  }
  return (
    <>
      <Modal
        dismissible
        show={addCategoryModal}
        onClose={handleModal}
        tabIndex={0}
      >
        <Modal.Header>{t("enterCategoryName")}</Modal.Header>
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
          <Button color="gray" onClick={handleSubmit}>
            {t("decline")}
          </Button>
          <Button
            className="w-28 text-center"
            onClick={() => {
              submitter.current.click();
            }}
            disabled={loading}
          >
            {loading ? <Spinner size="sm" /> : t("accept")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
