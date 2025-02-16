import { MenuDataItem } from "@ant-design/pro-layout";
import { User01 } from "untitledui-js-base";

const menuData: MenuDataItem[] = [
  {
    path: "/dashboard/dashboard",
    name: "Хянах самбар",
    icon: <User01 size="28" />,
    children: [],
    className: "custom-menu-item",
  },
  {
    path: "/dashboard/burtgel",
    name: "Талбайн бүртгэл",
    icon: <User01 size="28" />,
    children: [],
    className: "custom-menu-item",
   
  },
  {
    path: "/dashboard/lavlah",
    name: "Лавлах мэдээлэл",
    icon: <User01 size="28" />,
    children: [],
    className: "custom-menu-item",

  },
  {
    path: "/dashboard/tailan",
    name: "Тайлан",
    icon: <User01 size="28" />,
    children: [],
    className: "custom-menu-item",
   
  },
];

export default menuData;
