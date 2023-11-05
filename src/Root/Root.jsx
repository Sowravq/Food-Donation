import { Outlet } from "react-router-dom";
import Navbar from "../sharePage/Navbar";

 
const Root = () => {
    return (
        <div className="font-Noto-Serif ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;