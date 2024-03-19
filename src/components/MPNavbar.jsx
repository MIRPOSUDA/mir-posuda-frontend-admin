import {
  Avatar,
  Badge,
  DarkThemeToggle,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  Tooltip,
} from "flowbite-react";
import { HiOutlineBellAlert, HiBars3BottomRight } from "react-icons/hi2";
import LogoImg from "/assets/logo.jpg";
import { useDispatch } from "react-redux";
import { sidebarManager } from "../redux/slices/sidebar";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setUser } from "../redux/slices/user";
import { toast } from "sonner";

export default function MPNavbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { t } = useTranslation();

  function handleSideBar() {
    dispatch(sidebarManager());
  }

  function logout() {
    dispatch(setUser(null));
    // toast.success(t("toastifyLoginSucces"));
  }

  return (
    <Navbar fluid>
      <div className="flex gap-16">
        <Navbar.Brand
          className="relative cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={LogoImg}
            className="mr-3 h-6 rounded-full sm:h-9"
            alt={t("companyName")}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {t("companyName")}
          </span>
          <Badge className="absolute -right-11 -top-1" color="gray">
            {t("beta")}
          </Badge>
        </Navbar.Brand>
        <button
          onClick={handleSideBar}
          className="relative rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <HiBars3BottomRight className="h-5 w-5" />
        </button>
      </div>
      <div className="ml-auto flex items-center gap-5">
        <Tooltip content={t("changeTheme")}>
          <DarkThemeToggle />
        </Tooltip>

        <Tooltip content={t("orders")}>
          <button className="relative rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <HiOutlineBellAlert className="h-5 w-5" />
            <Notification />
          </button>
        </Tooltip>
        <div className="flex select-none md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Tooltip content={t("settings")}>
                <Avatar
                  alt={t("settings")}
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              </Tooltip>
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Mirzo Ulug'bek</span>
              <span className="block truncate text-sm font-medium">
                +998887291129
              </span>
            </DropdownHeader>
            <DropdownItem onClick={() => navigate("/settings")}>
              {t("settings")}
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={logout}>{t("exit")}</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}
