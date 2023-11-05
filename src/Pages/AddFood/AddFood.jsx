import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

 

const AddFood = () => {
    const {information} = useContext(AuthContext)
const handleAddFood = (event)=>{
    event.preventDefault();
    const form = event.target;
     const name = information.displayName;
     const email = information.email;
     const donarImg = information.photoURL;
     const foodName = form.foodName.value;
     const photoUrl = form.photoUrl.value;
     const foodQuantity = form.foodQuantity.value;
     const location = form.location.value;
     const expiredDate = form.expiredDate.value;
     const foodStatus = form.foodStatus.value;
     const additionalNotes = form.additionalNotes.value;

     const foodDetails = {name,email, donarImg, foodName,photoUrl,foodQuantity,location,expiredDate,foodStatus,additionalNotes};
     console.log(foodDetails);
}

    return (
        <div className=" p-12  " style={{backgroundImage: 'url(https://i.ibb.co/s5JCFXx/6dae4eed13bf2e5be6bff8e07131081d.gif)'}}>
            <p className="text-center text-5xl font-bold">Add Your Food</p>

             <form onSubmit={handleAddFood} className="max-w-4xl mx-auto mt-14">

               <div className="flex flex-col lg:flex-row items-center gap-5">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" defaultValue={information.displayName} type="text" name="name"   id="" />
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="email" name="email" defaultValue={information.email} id="" />
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" defaultValue={information.photoURL} type="text" name="donarImg"   id="" />
                 
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder="Food Name" type="text" name="foodName"   id="" />
                  <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="photoUrl" placeholder="Food Image URL" id="" />
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder="Food Quantity" type="text" name="foodQuantity"   id="" />
                  <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="location" placeholder="Location" id="" />
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder=" Expired Date" type="date" name="expiredDate"   id="" />
               
                  <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="foodStatus" defaultValue='Available' placeholder="Food Status" id="" />
               </div>
               <div className=" mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder="Additional Notes" type="text" name="additionalNotes"   id="" />
                   
               </div>
               <div className="mt-4">
               <button type="submit" className="text-gray-900 btn w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Food</button>
               </div>

             </form>
        </div>
    );
};

export default AddFood;