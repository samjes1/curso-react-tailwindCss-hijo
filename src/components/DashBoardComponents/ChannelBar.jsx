import { useState } from "react";
import { FaChevronRight, FaChevronDown, FaPlus } from "react-icons/fa";
import { BsHash } from "react-icons/bs";


const topics = ["tailwind-css", "react"]
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"]; 

export const ChannelBar = () => {
  return (
    <section className="w-80 h-auto bg-gray-200 dark:bg-[#2b2d31] hidden md:block">
      <Header />
      <div className="flex flex-col items-center justify-start p-1 ">
        <Dropdown header={"Topics"} selections={topics} />
        <Dropdown header={"Questions"} selections={questions} />
        <Dropdown header={"Random"} selections={random} />
      </div>
    </section>
  );
};

const Dropdown = ({ header,  selections}) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className=" w-full px-2 pb-2 transition duration-300 ease-in-out">
      <div className="flex items-center justify-evenly cursor-pointer" onClick={()=>setExpanded(!expanded)}>
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded
              ? "text-[#9f9f9f] text-lg  font-bold"
              : "text-gray-500 text-lg font-semibold cursor-default"
          }>
          {header}
        </h5>
        <FaPlus size={12} className="text-white/80 my-auto ml-auto" />

      </div>
    {
        expanded && selections && selections.map((item)=>(<TopicSelection key={item} item={item} />))
    }
    </div>
  );
};

const TopicSelection = ({item}) => (
    <div className="flex items-center justify-evenly mt-1 mr-auto ml-2 transition duration-300 ease-in-out cursor-pointer">
        <BsHash size={24} className="text-gray-400"/>
       <h5 className="text-gray-500 font-semibold tracking-wide mr-auto transition duration-300 ease-in-out hover:text-pink-500 dark:hover:text-gray-500/80 cursor-pointer">
        {item}

       </h5>
    </div>
)
const ChevronIcon = ({ expanded }) => {
  const chevClass = "text-white/80 my-auto mr-1";
  return expanded ? (
    <FaChevronDown size={14} className={chevClass} />
  ) : (
    <FaChevronRight size={14} className={chevClass} />
  );
};

const Header = () => (
  <div className="flex items-center justify-center h-16 m-0 p-0 ">
    <h5 className="text-lg text-gray-600 dark:text-gray-400 font-bold ml-4 mr-auto my-auto tracking-wider">
      Channels
    </h5>
  </div>
);
