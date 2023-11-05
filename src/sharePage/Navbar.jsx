import { Link, NavLink } from "react-router-dom";
 

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/availableFoods' className='ml-2'>Available Foods</NavLink></li>
        <li><NavLink to='/addFood' className='ml-2'>Add Food</NavLink></li>
        <li><NavLink to='/manageMyFoods'  className='ml-2'>Manage My Foods</NavLink></li>
        <li><NavLink to='/myFoodRequest' className='ml-2 mr-2'>My Food Request</NavLink></li>
        <p className="border-l-2"></p>
        <div className="flex items-center ml-4 ">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
        <li><NavLink to='/login' >Login</NavLink></li>
        </div>
    </>
    return (
        <div>
            <div className="navbar shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                     <Link><img className=" w-20" src=" https://i.ibb.co/7tBKyRj/images.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu menu-horizontal px-1  ">
                        {links}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;