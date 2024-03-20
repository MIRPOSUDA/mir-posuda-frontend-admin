import { useSelector } from "react-redux";

export default function useCategory() {
  const { user } = useSelector((state) => state.userSlice);
  const baseUrl = "https://admin.mirzobox.uz/api";

  async function getCategory() {
    let language = localStorage.getItem("language");
    if (language === "latin") {
      language = "uz";
    } else if (language === "cyrillic") {
      language = "cr";
    } else if (language === "ru") {
      language = "ru";
    } else language = "cr";
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
        throw new Error(null);
      default:
        return req;
    }
  }

  async function addCategory(category) {
    const req = await fetch(baseUrl + "/category/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });

    switch (req.status) {
      case 200:
        return req;
      case 401:
        throw new Error(null);
      case 400:
        throw new Error("Salom");
      default:
        return req;
    }
  }

  async function deleteCategory(id) {
    const req = await fetch(baseUrl + `/category/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });

    switch (req.status) {
      case 200:
        return req;
      case 401:
        throw new Error(null);
      case 400:
        throw new Error("Salom");
      default:
        return req;
    }
  }

  async function archiveCategory(id) {
    const req = await fetch(baseUrl + `/category/archive/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });

    switch (req.status) {
      case 200:
        return req;
      case 401:
        throw new Error(null);
      case 400:
        throw new Error("Salom");
      default:
        return req;
    }
  }

  async function unArchiveCategory(id) {
    const req = await fetch(baseUrl + `/category/unarchive/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    });

    switch (req.status) {
      case 200:
        return req;
      case 401:
        throw new Error(null);
      case 400:
        throw new Error("Salom");
      default:
        return req;
    }
  }

  return {
    getCategory,
    addCategory,
    deleteCategory,
    archiveCategory,
    unArchiveCategory,
  };
}
