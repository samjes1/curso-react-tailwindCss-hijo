import { Icon } from "@iconify/react/dist/iconify.js";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <section className=" top-0 left-0 h-screen bg-white dark:bg-[#1e1f22] shadow-lg md:flex flex-col w-16 p-2  ">
      <SidebarIcon text="home" funcion={() => navigate(-1)}
        icon={<Icon icon="ic:round-discord" width="24" height="24" />}
      />
      <Divider />
      <SidebarIcon icon={<BsPlus size={25} />} />
      <Divider />
      <SidebarIcon icon={<BsFillLightningFill size={25} />} />
      <SidebarIcon icon={<FaPoo size={25} />} />
      <SidebarIcon icon={<BsGearFill size={25} />} />
      <Divider />
    </section>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 🍕", funcion }) => (
  <div
    onClick={funcion}
    className="relative flex items-center justify-center h-12 w-12 my-2 mx-auto bg-gray-400 dark:bg-[#313338] hover:bg-[#5865f2] text-white hover:text-white/80 rounded-full hover:rounded-xl transition-all duration-100 ease-linear cursor-pointer shadow-lg group">
    {icon}
    <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md bg-[#141414] text-white transition-all duration-100 scale-0 origin-top group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => (
  <hr className="bg-gray-200 dark:bg-[#3a3a3a] border border-gray-200 dark:border-[#3a3a3a] rounded-full mx-2" />
);
