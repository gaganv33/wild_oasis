import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout(){
   return (
      <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
         <Sidebar />
         <Navbar />
         <main>
            <Outlet />
         </main>
      </div>
   );
}

export default AppLayout;
