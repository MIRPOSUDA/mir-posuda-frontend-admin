import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function LogoutLayer() {
  const { t } = useTranslation();
  const { loading } = useSelector((state) => state.userSlice);
  return (
    loading && (
      <div className="absolute  inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-50 dark:bg-gray-500 dark:bg-opacity-80">
        <span className="text-xl">{t("logoutLoading")}</span>
      </div>
    )
  );
}
