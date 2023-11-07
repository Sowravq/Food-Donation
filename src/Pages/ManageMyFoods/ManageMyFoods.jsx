import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyFoods from "./MyFoods";
import { FiSearch } from 'react-icons/fi';
 

 

const ManageMyFoods = () => {
    const {information} = useContext(AuthContext);
    const [foods,setFoods] = useState();
    const [search ,setSearch] = useState();
    const url = `http://localhost:4000/foods?email=${information.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setFoods(data)
            setSearch(data)
        })
    },[url])

    const handleSearch=(value)=>{
        const result = search?.filter(data=>data.foodName.toLowerCase().includes(value));
         setFoods(result)
      }
    
     
    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-5xl font-bold text-center mt-16 mb-14">Manege My Food</p>
            <div className="flex justify-center items-center">
            <input onChange={(e)=>handleSearch(e.target.value)} type="search" placeholder="Search Your Food..." className="input input-bordered md:w-[500px] lg:w-full max-w-4xl rounded-full bg-orange-200" />
              <FiSearch className="relative -ml-7 lg:-ml-14 text-xl"></FiSearch>
            </div>
            <div className="overflow-x-auto mt-10">
  <table className="table">
    
    <thead>
      <tr>
        
        <th>Donar Name</th>
        <th>Food Name</th>
        <th>Expired Date</th>
        <th>Food Quantity</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    
              {
                foods?.map(food=><MyFoods key={food._id} food={food}></MyFoods>)
            }
   
    
  </table>
</div>
             
           
        </div>
    );
};

export default ManageMyFoods;