import { BsArrowRight } from 'react-icons/bs';
const OurApp = () => {
    return (
        <div className="mt-24 max-w-7xl mx-auto grid gap-6 lg:grid-cols-2">
            <div className="col-span-1  ">
               <img className="lg:w-[500px] lg:h-[400px] w-full lg:object-cover rounded-md" src="https://i.ibb.co/ysv35qR/7xz-XQZiq-Bcyv-SCSmk-WQ63-K.jpg" alt="" />
               <img className="w-72 hidden lg:block relative ml-72 -mt-20 bg-white pl-3 pt-3 rounded-md" src="https://i.ibb.co/FV7gDLM/istockphoto-1130406978-612x612.jpg" alt="" />
            </div>
            <div className="col-span-1">
             <button className="  bg-cyan-500 text-white px-4 py-2">Start Now</button>
             <p className="text-5xl lg:text-7xl font-bold mt-10">Download the Food Share app</p>
             <p className="text-3xl mt-10 text-gray-300">Facilitating food exchange since 2023</p>
             <p className="mt-5">Waste No Food enables the food industry to donate excess food, when it becomes available, to local qualified charities.</p>
             <div className="mt-10 lg:mt-24 flex items-center gap-10">
                <div className=''>
                 
                <button className="btn bg-yellow-500 rounded-none"> 
                <BsArrowRight></BsArrowRight>
                Android App</button>
                </div>
                <div className=''>
                 
                <button className="btn bg-[#adc930] rounded-none"> 
                <BsArrowRight></BsArrowRight>
                Windows App</button>
                </div>
             </div>
            </div>
        </div>
    );
};

export default OurApp;