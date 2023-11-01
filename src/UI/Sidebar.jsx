import { HiOutlineHome, HiOutlineCalendarDays, HiOutlineHomeModern, HiOutlineUsers, HiOutlineCog6Tooth } from "react-icons/hi2";

import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar(){

   const [option, setOption] = useState(0);

   return (
      <div className="px-4 py-4 flex flex-col items-center gap-8 justify-start row-span-2 w-full"> 
         <Logo />
         <ul className="w-full text-xl flex flex-col gap-3">
            <NavLink className={`flex items-center justify-start gap-10 w-full hover:text-blue-500 transition-all
               duration-300 hover:bg-stone-100 py-3 rounded-lg ${option === 0 && "bg-stone-100 text-blue-500"}`} to={"dashboard"} onClick={() => setOption(0)}>
               <HiOutlineHome className="w-[50%]" />
               <span className="w-full">Home</span>
            </NavLink>

            <NavLink className={`flex items-center justify-start gap-10 w-full hover:text-blue-500 transition-all
               duration-300 hover:bg-stone-100 py-3 rounded-lg ${option === 1 && "bg-stone-100 text-blue-500"}`} to={"booking"} onClick={() => setOption(1)}>
               <HiOutlineCalendarDays className="w-[50%]" />
               <span className="w-full">Booking</span>
            </NavLink>

            <NavLink className={`flex items-center justify-start gap-10 w-full hover:text-blue-500 transition-all
               duration-300 hover:bg-stone-100 py-3 rounded-lg ${option === 2 && "bg-stone-100 text-blue-500"}`} to={"cabins"} onClick={() => setOption(2)}>
               <HiOutlineHomeModern className="w-[50%]" />
               <span className="w-full">Cabins</span>
            </NavLink>

            <NavLink className={`flex items-center justify-start gap-10 w-full hover:text-blue-500 transition-all
               duration-300 hover:bg-stone-100 py-3 rounded-lg ${option === 3 && "bg-stone-100 text-blue-500"}`} to={"users"} onClick={() => setOption(3)}>
               <HiOutlineUsers className="w-[50%]" />
               <span className="w-full">Users</span>
            </NavLink>

            <NavLink className={`flex items-center justify-start gap-10 w-full hover:text-blue-500 transition-all
               duration-300 hover:bg-stone-100 py-3 rounded-lg ${option === 4 && "bg-stone-100 text-blue-500"}`} to={"setting"} onClick={() => setOption(4)}>
               <HiOutlineCog6Tooth className="w-[50%]" />
               <span className="w-full">Setting</span>
            </NavLink>
         </ul>
      </div>
   );
}

export default Sidebar;
