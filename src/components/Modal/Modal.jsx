import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Modal = ({singleFood}) => {
    const {information} = useContext(AuthContext);
    const {name,_id,donarImg,email,foodName,photoUrl
        ,location,foodStatus,foodQuantity,expiredDate,additionalNotes} = singleFood;


        const handleRequest = (event)=>{
            event.preventDefault();
          console.log('kkejl');
      const form = event.target;
      const name = information.displayName;
      const email = information.email;
      
      const foodName = form.foodName.value;
      const photoUrl = form.photoUrl.value;
      const foodId = form.foodId.value;
      const location = form.location.value;
      const expiredDate = form.expiredDate.value;
      const additionalNotes = form.additionalNotes.value;
      const donationMoney = form.donationMoney.value;
      const requestDate = form.requestDate.value;
      const foodStatus = form.foodStatus.value;
      const userEmail = form.userEmail.value;
      const  requestFood = {name,email,foodName,photoUrl,foodId,location,expiredDate, additionalNotes,donationMoney,requestDate,userEmail,foodStatus};
      console.log(requestFood);

      fetch('http://localhost:4000/requests',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(requestFood)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.insertedId){
          Swal.fire({
          icon: "success",
          title: "success",
          text: "Food add successful!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        }
        
       })
             
        }


    return (
        <div>

            <button className="btn bg-lime-600  w-full mt-14" onClick={() => document.getElementById('my_modal_3').showModal()}>Request Now</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form  method="dialog">
                        
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className=" p-12  " >
            <p className="text-center text-5xl font-bold">Request Now Your Food</p>

             <form onSubmit={handleRequest} className="max-w-4xl mx-auto mt-14">

               <div className="flex flex-col lg:flex-row items-center gap-5">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" disabled defaultValue={name} type="text" name="name"   id="" />
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="email" name="email" disabled defaultValue={email} id="" />
                 
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder="Food Name" type="text" disabled defaultValue={foodName} name="foodName"   id="" />
                  <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="photoUrl" disabled defaultValue={photoUrl} placeholder="" id="" />
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder="foodId" type="text" disabled defaultValue={_id} name="foodId"   id="" />
                  <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="location" disabled defaultValue={location} placeholder="Location" id="" />
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder=" Expired Date" type="text" disabled defaultValue={expiredDate} name="expiredDate"   id="" />
               
                  <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="date" name="requestDate"  placeholder="Enter Request date" id="" />
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" disabled defaultValue={information.email} type="email" name="userEmail"   id="" required/>
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="donationMoney" placeholder="Donate your money....(Optional)" id="" />
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" type="text" name="foodStatus" defaultValue={foodStatus} disabled placeholder="" id="" />
                 
               </div>
               <div className=" mt-4">
                <input className="w-full py-2 px-3 shadow-lg bg-red-100" placeholder="Additional Notes" type="text" name="additionalNotes"   id="" />
                   
               </div>
               <div className="mt-4">
               <button type="submit" className="text-gray-900 btn w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Request Now</button>
               </div>

             </form>
        </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;