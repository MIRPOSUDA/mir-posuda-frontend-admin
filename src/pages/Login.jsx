import { Button, Label, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/slices/user";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import LogoImg from "/assets/logo.jpg";
import getFormData from "../utils/get-form-data";
import MPNumberInput from "../components/MPNumberInput";
import MPPasswordInput from "../components/MPPasswordInput";
import useLogin from "../hooks/useLogin";
import getFormattedNumber from "../utils/get-formatted-number";

export default function Login() {
  const { loginWithPhoneNumberAndPassword } = useLogin();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLoading } = useSelector((state) => state.userSlice);

  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    data.phoneNumber = getFormattedNumber(data.phoneNumber);
    dispatch(setLoading(true));
    loginWithPhoneNumberAndPassword(data)
      .then((res) => {
        dispatch(setUser(res));
        dispatch(setLoading(false));
        toast.success(t("toastifyLoginSucces"));
      })
      .catch(() => {
        dispatch(setUser(null));
        dispatch(setLoading(false));
        toast.error(t("toastifyLoginError"));
      });
  }

  return (
    <div className="mx-auto flex max-w-md pt-40">
      <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <header className="flex justify-center bg-slate-100 p-5 dark:bg-gray-700">
          <span className="flex items-center">
            <img
              src={LogoImg}
              className="mr-3 h-6 rounded-full sm:h-9"
              alt={t("companyName")}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              {t("companyName")}
            </span>
          </span>
        </header>
        <form
          className="flex w-full flex-col gap-4 p-10"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneNumber" value={t("enterPhoneNumber")} />
            </div>
            <MPNumberInput />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value={t("enterPassword")} />
            </div>
            <MPPasswordInput />
          </div>
          <Button type="submit">
            {isLoading ? <Spinner size="sm" /> : t("login")}
          </Button>
        </form>
      </div>
    </div>
  );
}
