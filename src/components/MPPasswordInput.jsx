import { TextInput } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function MPPasswordInput() {
  const [hidden, setHidden] = useState(true);
  const { t } = useTranslation();
  return (
    <div className="relative">
      <TextInput
        id="password"
        type={hidden ? "password" : "text"}
        name="password"
        placeholder={t("password")}
        value="Admin.123$"
        autoComplete="off"
        required
      />
      <button
        className="absolute right-4 top-2/4 -translate-y-2/4 text-gray-900 dark:text-white"
        onClick={() => setHidden(!hidden)}
        type="button"
      >
        {hidden ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
    </div>
  );
}
