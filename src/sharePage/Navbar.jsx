import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
    const {information,logout} = useContext(AuthContext);

    const handleLogout =()=>{
        logout()
        .then(()=>{
          toast.success("Logout successful!", {
              position: "top-center"
          })
          .catch(error=>{
            console.log(error);
          })
        })
    }
    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/availableFoods' className='ml-2'>Available Foods</NavLink></li>
        <li><NavLink to='/addFood' className='ml-2'>Add Food</NavLink></li>
        <li><NavLink to='/manageMyFoods'  className='ml-2'>Manage My Foods</NavLink></li>
        <li><NavLink to='/myFoodRequest' className='ml-2 mr-2'>My Food Request</NavLink></li>
        <p className="border-l-2"></p>
        <div className="hidden lg:block">
        <div className="flex items-center ml-4">
        {
            information? <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="  rounded-full">  <img className="w-16 rounded-full " src={information.photoURL} /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-slate-400 rounded-box w-52">
              <li><a>{information.displayName}</a></li>
              <li><a>{information.email}</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
              <ToastContainer></ToastContainer>
            </ul>
          </div>
            :
            <>
             <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          <li><NavLink to='/login' >Login</NavLink></li>
            </>

        }
        </div>
        </div>
    </>

  

    return (
        <div className="fixed z-50 w-full">
            <div className="navbar  bg-white rounded-t-md text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                     <Link><img className=" w-20" src=" https://i.ibb.co/7tBKyRj/images.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden  lg:flex w-full">
                    <ul className="menu menu-horizontal px-1  ">
                        {links}
                    </ul>
                </div>
               <div className="ml-28 md:ml-64 lg:ml-0">
               <div className=" block lg:hidden  ">
         <div className="flex items-center ml-4 ">
        {
            information? <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="  rounded-full">  <img className="w-16 rounded-full " src={information.photoURL} /></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>{information.displayName}</a></li>
              <li><a>{information.email}</a></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
            :
            <>
             <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          <li><NavLink to='/login' >Login</NavLink></li>
            </>

        }
        </div>
                 </div>
               </div>
            </div>
            
        </div>
    );
};

export default Navbar;