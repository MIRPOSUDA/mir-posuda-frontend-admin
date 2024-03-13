import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
} from "react-icons/hi";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { TbCategoryPlus } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function MPSidebar() {
  const { open } = useSelector((state) => state.sideBarSlice);
  const navigate = useNavigate();
  const links = [
    { title: "Adminlar", path: "/admins", icon: HiUser },
    {
      title: "Kategoriyalar",
      path: "/categories",
      icon: TbCategoryPlus,
    },
  ];

  const statistics = [
    { title: "Sotuvlar", path: "sales" },
    {
      title: "Kirim chiqim",
      path: "earn",
    },
  ];

  return (
    <Sidebar
      className="transition-all duration-300"
      collapseBehavior="collapse"
      collapsed={open}
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
          <Sidebar.Collapse
            icon={FaArrowUpRightDots}
            label="Statiska"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"],
                  )}
                />
              );
            }}
          >
            {statistics.map(({ path, title }) => {
              return (
                <Sidebar.Item
                  className="cursor-pointer"
                  onClick={() => navigate(`/statistics/${path}`)}
                >
                  {title}
                </Sidebar.Item>
              );
            })}
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
