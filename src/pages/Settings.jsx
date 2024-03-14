import { useTranslation } from "react-i18next";
import MPLanguageToggler from "../components/MPLanguageToggler";

export default function Settings() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <h2 className="mb-5 text-2xl font-bold">{t("chooseLanguage")}</h2>
      <MPLanguageToggler />
    </div>
  );
}
