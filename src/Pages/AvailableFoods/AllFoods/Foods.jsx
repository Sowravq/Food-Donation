import { MdOutlineDateRange } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Foods = ({food}) => {
    const {name,_id,donarImg,email,foodName,photoUrl
        ,location,foodStatus,foodQuantity,expiredDate,additionalNotes} =food;
    return (
        <div>
              <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex flex-col lg:flex-row">
                     <div>
                     
                        <img className="rounded-t-lg h-60 lg:h-full w-full lg:w-[150px] object-cover" src={photoUrl} alt="" />
                        <p className=' bg-cyan-500 text-white text-xs p-2 w-16 absolute -mt-[240px] lg:-mt-[226px] rounded-tl-md'>{foodStatus}</p>
                   
                     </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{foodName}</h5>
                        </a>
                        <div className='flex  items-center gap-5 md:gap-40 lg:gap-5'>
                            
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

                            <div className='text-3xl btn btn-ghost text-sky-500'>
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </div>
    );
};

export default Foods;