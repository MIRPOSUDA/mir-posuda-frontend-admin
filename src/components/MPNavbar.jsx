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
import { HiCog, HiLogout } from "react-icons/hi";
import LogoImg from "/assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { sidebarManager } from "../redux/slices/sidebar";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authLogout } from "../redux/slices/user";

export default function MPNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.userSlice);

  function handleSideBar() {
    dispatch(sidebarManager());
  }

  function logout() {
    dispatch(authLogout({ phoneNumber: user.phoneNumber }));
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
          className="relative rounded-lg bg-gray-100 p-2.5 text-sm text-gray-500 transition-opacity hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:focus:ring-gray-700"
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
              <span className="block text-sm">{user.fullName}</span>
              <span className="block truncate text-sm font-medium">
                {user.phoneNumber}
              </span>
            </DropdownHeader>
            <DropdownItem onClick={() => navigate("/settings")} icon={HiCog}>
              {t("settings")}
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={logout} icon={HiLogout}>
              {t("exit")}
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}
