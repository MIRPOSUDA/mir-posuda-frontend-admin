import {
  Avatar,
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

export default function MPNavbar() {
  const dispatch = useDispatch();
  function handleSideBar() {
    dispatch(sidebarManager());
  }
  return (
    <Navbar fluid>
      <div className="flex gap-5">
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src={LogoImg}
            className="mr-3 h-6 rounded-full sm:h-9"
            alt="Mirposuda logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Mirposuda
          </span>
        </Navbar.Brand>
        <button
          onClick={handleSideBar}
          className="relative rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <HiBars3BottomRight className="h-5 w-5" />
        </button>
      </div>
      <div className="ml-auto flex items-center gap-5">
        <Tooltip content="Qorong'u rejimga o'tish">
          <DarkThemeToggle />
        </Tooltip>
        <Tooltip content="Buyurtmalar">
          <button className="relative rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <HiOutlineBellAlert className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600"></span>
          </button>
        </Tooltip>
        <div className="flex select-none md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Tooltip content="Sozlamalar">
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              </Tooltip>
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Mirzo Ulug'bek</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Navbar>
  );
}
