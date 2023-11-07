// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";
// // import Swal from "sweetalert2";
 
 
 
// const Update = () => {
//     const {information} = useContext(AuthContext);
//      const foods = useLoaderData();
//      const { name, _id, donarImg, email, foodName, photoUrl
//         , location, foodStatus, foodQuantity, expiredDate, additionalNotes } = foods;
       
        
//         const handleUpdateFood = (event)=>{
//             event.preventDefault();
//             const form = event.target;
//              const name = information.displayName;
//              const email = information.email;
//              const donarImg = information.photoURL;
//              const foodName = form.foodName.value;
//              const photoUrl = form.photoUrl.value;
//              const foodQuantity = form.foodQuantity.value;
//              const location = form.location.value;
//              const expiredDate = form.expiredDate.value;
//              const foodStatus = form.foodStatus.value;
//              const additionalNotes = form.additionalNotes.value;
        
//              const foodDetails = {name, email, donarImg, foodName,photoUrl,foodQuantity,location,expiredDate,foodStatus,additionalNotes};
//              console.log(foodDetails);
        
        
//              fetch(`http://localhost:4000/foods/${_id}`,{
//               method:"PUT",
//               headers:{
//                 "content-type":"application/json"
//               },
//               body:JSON.stringify(foodDetails)
//              })
//              .then(res=>res.json())
//              .then(data=>{
//               console.log(data);
//               if(data.insertedId){
//                 Swal.fire({
//                 icon: "success",
//                 title: "success",
//                 text: "Food Update successful!",
//                 footer: '<a href="#">Why do I have this issue?</a>'
//               });
//               }
              
//              })
//         }
   
     
//     return (
//         <div className=" p-12  " style={{backgroundImage: 'url(https://i.ibb.co/s5JCFXx/6dae4eed13bf2e5be6bff8e07131081d.gif)'}}>
//         <p className="text-center text-5xl font-bold">Update Your Food</p>

//          <form onSubmit={handleUpdateFood}  className="max-w-4xl mx-auto mt-14">

//            <div className="flex flex-col lg:flex-row items-center gap-5">
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" disabled defaultValue={information.displayName}type="text" name="name"   id="" />
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="email" name="email" disabled defaultValue={information.email} id="" />
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" disabled defaultValue={information.photoURL} type="text" name="donarImg"   id="" />
             
//            </div>
//            <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" defaultValue={foodName} placeholder="Food Name" type="text" name="foodName"   id="" />
//               <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Food Image URL" id="" />
//            </div>
//            <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" defaultValue={foodQuantity} placeholder="Food Quantity" type="text" name="foodQuantity"   id="" />
//               <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="location" defaultValue={location} placeholder="Location" id="" />
//            </div>
//            <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" defaultValue={expiredDate} placeholder=" Expired Date" type="date" name="expiredDate"   id="" />
           
//               <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="foodStatus" defaultValue={foodStatus} placeholder="Food Status" id="" />
//            </div>
//            <div className=" mt-4">
//             <input className="w-full py-2 px-3 shadow-lg bg-red-100" defaultValue={additionalNotes} placeholder="Additional Notes" type="text" name="additionalNotes"   id="" />
               
//            </div>
//            <div className="mt-4">
//            <button  className="text-gray-900 btn w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " disabled>Update Now</button>
//            </div>

//          </form>
//     </div>
//     );
// };

// export default Update;