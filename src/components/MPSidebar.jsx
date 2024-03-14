import { Sidebar } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { HiUser } from "react-icons/hi";
import { TbCategoryPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MPSidebar() {
  const { open } = useSelector((state) => state.sideBarSlice);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const links = [
    { title: t("admins"), path: "/admins", icon: HiUser },
    {
      title: t("categories"),
      path: "/categories",
      icon: TbCategoryPlus,
    },
  ];

  return (
    <Sidebar
      className="transition-all duration-300"
      collapseBehavior="collapse"
      collapsed={!open}
      aria-label="Sidebar with logo branding example"
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
