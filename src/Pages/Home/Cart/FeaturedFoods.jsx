 
import { useEffect, useState } from 'react';
import Food from './Food/Food';
import { Link } from 'react-router-dom';
 
 
const FeaturedFoods = () => {
    const[foods,setFoods] = useState();
   
    useEffect(()=>{
        fetch('https://food-donation-and-collect-server.vercel.app/foods')
        .then(res=>res.json())
        .then(data=>{
            const sortby = data?.sort((a,b)=>b.foodQuantity - a.foodQuantity);
            setFoods(sortby.slice(0,6))
            
        })
    },[])

    console.log(foods);

    
    return (
        
        <div className="mt-16 ">
             
     

            <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold">Featured Foods</p>
                <p className="border-b-2 max-w-[500px] mx-auto mt-5 mb-5"></p>
            </div>


            <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                  {
                    foods?.map(singleFood=><Food key={singleFood._id} singleFood={singleFood}  ></Food>)
                 } 
                    

            </div>
                <div className='flex justify-center items-center mt-10'>
                <Link to='/availableFoods'>
                <button type="button" className="text-white btn bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See More</button>
                </Link>
                </div>

        </div>
    );
};

export default FeaturedFoods;