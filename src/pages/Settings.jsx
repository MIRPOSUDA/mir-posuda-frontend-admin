import { useTranslation } from "react-i18next";
import MPLanguageToggler from "../components/MPLanguageToggler";
import MPAdminSettings from "../components/MPAdminSettings";

export default function Settings() {
  const { t } = useTranslation();
  return (
    <section>
      <section className="mb-10 flex flex-col">
        <h2 className="mb-5 text-2xl font-bold">{t("chooseLanguage")}</h2>
        <MPLanguageToggler />
      </section>
      <MPAdminSettings />
    </section>
  );
}
