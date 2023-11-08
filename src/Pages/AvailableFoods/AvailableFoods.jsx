// import { useLoaderData } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';
import Foods from "./AllFoods/Foods";
import { useEffect, useState } from "react";


const AvailableFoods = () => {
    // const allFood = useLoaderData();
    const [food ,setFood] = useState()
    const [search,setSearch] = useState();
    useEffect(()=>{
        fetch('https://food-donation-and-collect-server.vercel.app/foods')
        .then(res=>res.json())
        .then(data=>{
            const sortBy = data?.sort((a,b)=>new Date(b.expiredDate) - new Date(a.expiredDate));
            setFood(sortBy);
            setSearch(data)
        })
    },[])
    
    
    const handleSearch=(value)=>{
      const result = search?.filter(data=>data.foodName.toLowerCase().includes(value));
       setFood(result)
    }

     

    return (
        <div className=" pt-16 md:pt-24 lg:pt-24 pl-4 md:pl-24 lg:pl-24 pr-4 md:pr-24 lg:pr-24" style={{ backgroundImage: 'url(https://i.ibb.co/9nn5R2J/giphy.gif)' }}>
            <div className=""> 
                <div className="hero h-[500px] shadow-lg " style={{ backgroundImage: 'url(https://i.ibb.co/5hWBpSj/pexels-ash-376464.jpg)' }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content ">
                        <div className=" ">
                            <p className="text-4xl font-bold">Search Your Food</p>
                            <form className="mt-5">

                                <div className="relative">
                                    <div className="absolute text-black  inset-y-0 left-0 flex items-center ml-14 md:ml-0 lg:ml-0 pl-3 pointer-events-none">
                                        <FiSearch></FiSearch>
                                    </div>

                                    <input onChange={(e)=>handleSearch(e.target.value)} type="search" id="default-search" className="block ml-12 md:ml-0 lg:ml-0 md:px-40 lg:px-60 py-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Food..."  />
                                  

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white px-2 md:px-14 lg:px-20 py-10">
           <div className="bg-white   shadow-2xl relative -mt-44 rounded-md ">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
             {
               food?.map(food=><Foods key={food._id} food={food} ></Foods>)
             }
             </div>
           </div>
            </div>
        </div>
    );
};

export default AvailableFoods;