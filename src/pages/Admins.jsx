import { useTranslation } from "react-i18next";

export default function Admins() {
  const { t } = useTranslation();
  return <div>{t("admins")}</div>;
}
