import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer2 from "../components/Footer/Footer2";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="mt-10 md:mt-16 lg:mt-24">
        <Footer2></Footer2>
      </div>
    </div>
  );
};

export default MainLayout;