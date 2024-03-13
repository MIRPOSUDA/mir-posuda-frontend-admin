import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <NavLink className="flex" href="/">
      <img
        src={LogoImg}
        className="mr-3 h-6 sm:h-9 rounded-full"
        alt="Mirposuda logotip"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Mirposuda
      </span>
    </NavLink>
  );
}
