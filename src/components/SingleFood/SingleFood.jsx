import { useLoaderData } from "react-router-dom";
import { MdOutlineDateRange } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import Modal from "../Modal/Modal";


const SingleFood = () => {
    const singleFood = useLoaderData();
    console.log(singleFood);
    const {name,_id,donarImg,email,foodName,photoUrl
        ,location,foodStatus,foodQuantity,expiredDate,additionalNotes} = singleFood;
    return (
        <div className="bg-slate-500   px-6 md:px-10 lg:px-16 py-20">
            <div className="bg-white flex flex-col lg:flex-row gap-10">
                <div className="flex-1  bg-lime-600 rounded-br-full -mt-[79px] -ml-[64px]">
                       <img className="rounded-full object-cover relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] bg-black p-2 ml-24 md:ml-44 lg:ml-24 mt-44" src={photoUrl} alt="" />
                </div>
                <div className="flex-1 mt-28 p-5 ">
                     <h2 className="text-5xl font-bold">{foodName}</h2>
                     <p className="text-2xl font-semibold mt-4">Food Quantity : <span>{foodQuantity}</span></p>
                     <div className='flex items-center gap-2 text-2xl font-semibold mt-2'>
                            <p className='text-red-500 font-semibold'>Exp :</p>
                            <MdOutlineDateRange ></MdOutlineDateRange>
                            <p>{expiredDate}</p>
                          </div>
                          <p className="border-b-2 mt-6 mb-6"></p>
                          <p className="text-3xl font-bold text-violet-300">Donor Information</p>
                          <p className="text-3xl font-semibold mt-5">{name}</p>
                          <div className='flex items-center gap-2 '>
                                <GrLocation></GrLocation>
                                <p className="text-xl font-bold"> <span  >Pickup Location</span> : {location}</p>
                              </div>
                               <div className=" ">
                               <Modal singleFood={singleFood}></Modal>
                               </div>

                              
                </div>
            </div>
            <p className="bg-white py-20"></p>
        </div>
    );
};

export default SingleFood;