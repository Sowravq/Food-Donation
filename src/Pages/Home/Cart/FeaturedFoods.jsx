import { MdOutlineDateRange } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineArrowRight } from 'react-icons/ai';
const FeaturedFoods = () => {
    return (
        <div className="mt-16 ">

            <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold">Featured Foods</p>
                <p className="border-b-2 max-w-[400px] mx-auto mt-5 mb-5"></p>
            </div>


            <div className="mt-20 max-w-7xl mx-auto">


                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://i.ibb.co/5hWBpSj/pexels-ash-376464.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Burger</h5>
                        </a>
                        <div className='flex justify-between items-center'>
                            
                          <div className='flex items-center gap-2'>
                            <p className='text-red-500 font-semibold'>Exp :</p>
                            <MdOutlineDateRange ></MdOutlineDateRange>
                            <p>10.10.2023</p>
                          </div>

                          <div className='flex items-center gap-2'>
                              <p>Quantity : <span>5</span></p>
                          </div>
                          


                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2"> This food is very tasty.Its a very Healthy.</p>
                        <p className='border-b-2 mb-3 mt-3'></p>

                        <div className='flex justify-between items-center'>

                        <div className='flex items-center gap-2'>
                            
                            <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://i.ibb.co/b66ntNm/istockphoto-1319763895-612x612.jpg" />
                                    </div>
                                </div>
                                <div>
                                <h2>Sowrav kumar</h2>
                                 <div className='flex items-center gap-2'>
                                <GrLocation></GrLocation>
                                <p>Rajshahi</p>
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
        </div>
    );
};

export default FeaturedFoods;