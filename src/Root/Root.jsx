import { Outlet } from "react-router-dom";
import Navbar from "../sharePage/Navbar";
import Footer from "../sharePage/Footer";
import Cursor from "../sharePage/Cursor/Cursor";

 
const Root = () => {
    return (
        <div className="font-Noto-Serif ">
            <Cursor></Cursor>
            <div className="relative ">
            <Navbar></Navbar>
            </div>
           <div className=" absolute mt-[95px] w-full">
           <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;