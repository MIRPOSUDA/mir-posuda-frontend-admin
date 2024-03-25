import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { modalManager } from "../redux/slices/modals";
import { useRef } from "react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";
import MPAddNewAdminModalNumberInput from "./MPAddNewAdminModalNumberInput";
import getFormData from "../utils/get-form-data";
import getFormattedNumber from "../utils/get-formatted-number";
import { addAdmin } from "../redux/slices/admins";

export default function MPAddNewAdminModal() {
  const submitter = useRef(null);
  const { t } = useTranslation();
  const { addAdminModal } = useSelector((state) => state.modalsSlice);
  const dispatch = useDispatch();

  function handleModal() {
    dispatch(modalManager("addAdminModal"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    data.phoneNumber = getFormattedNumber(data.phoneNumber);
    data.gender = Number(data.gender);
    dispatch(addAdmin(data));
    handleModal();
  }

  return (
    <Modal
      size="xl"
      dismissible
      show={addAdminModal}
      onClose={handleModal}
      tabIndex={0}
    >
      <Modal.Header>Yangi admin ma'lumotlarini kiriting</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Ism" />
            </div>
            <TextInput
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Ism"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastName" value="Familiya" />
            </div>
            <TextInput
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Familiya"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneNumber" value="Telefon raqam*" />
            </div>
            <MPAddNewAdminModalNumberInput />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="gender" value="Admin jinsi" />
            </div>
            <Select id="gender" name="gender" defaultValue="0" required>
              <option value="0">Erkak</option>
              <option value="1">Ayol</option>
            </Select>
          </div>
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
