import { Outlet } from "react-router-dom";
import Navbar from "../sharePage/Navbar";
import Footer from "../sharePage/Footer";

 
const Root = () => {
    return (
        <div className="font-Noto-Serif ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;