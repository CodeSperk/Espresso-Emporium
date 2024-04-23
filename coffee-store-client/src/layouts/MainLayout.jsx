import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer2 from "../components/Footer/Footer2";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer2></Footer2>
    </div>
  );
};

export default MainLayout;