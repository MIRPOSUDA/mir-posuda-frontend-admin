import { useSelector } from "react-redux";

export default function useCategory() {
  const { user } = useSelector((state) => state.userSlice);
  const baseUrl = "https://mir-posuda.1kb.uz/api";

  async function getCategory() {
    const req = await fetch(baseUrl + "/category/get-all/cr", {
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
        return await req.json();
      case 401:
        throw new Error(null);
      default:
        return req;
    }
  }

  return { getCategory, addCategory };
}
