import { Sidebar } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { HiUser } from "react-icons/hi";
import { RiHome3Line } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function MPSidebar() {
  const { open } = useSelector((state) => state.sideBarSlice);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const links = [
    { title: t("mainPage"), path: "/", icon: RiHome3Line },
    { title: t("admins"), path: "/admins", icon: HiUser },
    {
      title: t("categories"),
      path: "/categories",
      icon: TbCategoryPlus,
    },
  ];

  const customTheme = {
    root: {
      inner:
        "h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3 dark:bg-gray-800",
    },
  };

  return (
    <Sidebar
      className="transition-all duration-300"
      theme={customTheme}
      collapseBehavior="collapse"
      collapsed={open}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {links.map(({ path, title, icon }) => {
            return (
              <Sidebar.Item
                className="cursor-pointer"
                onClick={() => navigate(path)}
                key={title}
                icon={icon}
                active={path === pathname ? true : false}
              >
                {title}
              </Sidebar.Item>
            );
          })}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
