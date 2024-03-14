import { useTranslation } from "react-i18next";

export default function Categories() {
  const { t } = useTranslation();
  return <div>{t("categories")}</div>;
}
