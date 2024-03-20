import { t } from "i18next";
import { useSelector } from "react-redux";

export default function useCategory() {
  const { user } = useSelector((state) => state.userSlice);
  const baseUrl = "https://admin.mirzobox.uz/api";

  async function getCategory() {
    const language = localStorage.getItem("language") || "cr";
    const req = await fetch(baseUrl + `/category/get-all/${language}`, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });

    switch (req.status) {
      case 200:
        return await req.json();
      case 204:
        return [];
      case 401:
        throw new Error(t("mustLogin"));
      default:
        return req;
    }
  }

  async function addCategory(category) {
    fetch(baseUrl + "/category/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
  }

  function deleteCategory(id) {
    fetch(baseUrl + `/category/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });
  }

  function handleArchiveCategory(id, mode) {
    fetch(baseUrl + `/category/${mode}/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });
  }

  return {
    getCategory,
    addCategory,
    deleteCategory,
    handleArchiveCategory,
  };
}
