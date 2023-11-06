import { MdOutlineDateRange } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Food = ({singleFood}) => {
    
     const {name,_id,donarImg,email,foodName,photoUrl
        ,location,foodStatus,foodQuantity,expiredDate,additionalNotes} = singleFood;
         
     
    return (
        <div>
               <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg h-60 w-full" src={photoUrl} alt="" />
                        <p className=' bg-cyan-500 text-white p-2 w-24 absolute -mt-[240px] rounded-tl-md'>{foodStatus}</p>
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{foodName}</h5>
                        </a>
                        <div className='flex justify-between items-center'>
                            
                          <div className='flex items-center gap-2'>
                            <p className='text-red-500 font-semibold'>Exp :</p>
                            <MdOutlineDateRange ></MdOutlineDateRange>
                            <p>{expiredDate}</p>
                          </div>

                          <div className='flex items-center gap-2'>
                              <p>Quantity : <span>{foodQuantity}</span></p>
                          </div>
                          


                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2">  {additionalNotes}</p>
                        <p className='border-b-2 mb-3 mt-3'></p>

                        <div className='flex justify-between items-center'>

                        <div className='flex items-center gap-2'>
                            
                            <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={donarImg} />
                                    </div>
                                </div>
                                <div>
                                <h2>{name}</h2>
                                 <div className='flex items-center gap-2'>
                                <GrLocation></GrLocation>
                                <p>{location}</p>
                              </div>
                                </div>
                            </div>
                            

                             <Link to={`/singleFood/${_id}`}>
                             <div className='text-3xl btn btn-ghost text-sky-500'>
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </div></Link>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
};

export default Food;