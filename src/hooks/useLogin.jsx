export default function useLogin() {
  const baseUrl = "https://admin.mirzobox.uz/api/auth/login";
  async function loginWithPhoneNumberAndPassword(data) {
    const req = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!req.ok) {
      throw new Error("Something went wrong");
    }

    const res = await req.json();

    return res;
  }

  return { loginWithPhoneNumberAndPassword };
}
