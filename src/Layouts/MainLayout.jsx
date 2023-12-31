import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div>
      <Sidebar></Sidebar>
        <main className='main'>
            <Outlet></Outlet>
        </main>
    </div>
  );
};

export default MainLayout;
