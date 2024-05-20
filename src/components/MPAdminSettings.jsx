import { Label, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

export default function MPAdminSettings() {
  const { user } = useSelector((state) => state.userSlice);

  return (
    <section className="flex flex-col">
      <h2 className="mb-5 text-2xl font-bold">Bosh admin sozlamalari</h2>
      <form>
        <div className="flex w-full gap-5">
          <div className="w-96">
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Ism" />
            </div>
            <TextInput
              value={user.fullName}
              id="firstName"
              type="text"
              placeholder="Ismingizni kiriting"
              required
            />
          </div>
          <div className="w-96">
            <div className="mb-2 block">
              <Label htmlFor="firstName" value="Familiya" />
            </div>
            <TextInput
              id="firstName"
              type="text"
              placeholder="Familiyangizni kiriting"
              required
            />
          </div>
        </div>
      </form>
    </section>
  );
}
