import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LogoImg from "/assets/logo.jpg";

export default function Login() {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function login() {
    dispatch(setUser({}));
    toast.success(t("toastifyLoginSucces"));
  }

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{3})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d)/, "$1-$2")
      .replace(/(-\d{2})(\d+?)$/, "$1");
  };

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
        <form className="flex w-full flex-col gap-4 p-10">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phoneNumber" value={t("enterPhoneNumber")} />
            </div>
            <TextInput
              id="phoneNumber"
              type="text"
              value={number}
              placeholder="(00) 123-45-67"
              autoComplete="off"
              onChange={(e) => setNumber(maskPhone(e.target.value))}
              addon="+998"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value={t("enterPassword")} />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder={t("password")}
              autoComplete="off"
              required
            />
          </div>
          <Button onClick={login} type="submit">
            {t("login")}
          </Button>
        </form>
      </div>
    </div>
  );
}
