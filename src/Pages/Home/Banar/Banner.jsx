import Slider from "./Slider";

 

  
 
 const Banner = () => {
    return (


        
        <div className="">
           <div className=" lg:py-6 "  style={{backgroundImage: 'url(https://i.ibb.co/zR3D4RC/41-B-yjbee-IL-AC-UF894-1000-QL80.jpg)'}}>
         
         <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 xl:gap-20 ">
           <div className="bg-slate-50 py-7 lg:py-56 px-12 lg:rounded-tr-full ">
             <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white ">FOOD COLLECT <br /> & <span className="text-[#adc930] ">DONATION</span></h1>
             <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Donating wholesome food for human consumption diverts food waste from landfills and puts food on the table for families in need. Donations of nonperishable and unspoiled perishable food from homes and businesses help stock the shelves at food banks, soup kitchens, pantries, and shelters.</p>
       
            
             <div className="mt-7 grid gap-3 w-full sm:inline-flex">
             <button className=" brightness-110  animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#adc930] to-red-500 text-black">READ MORE</button>
                
             </div>
           
       
           </div>
           
       
           <div className="relative  px-4 mt-36">
             <Slider></Slider>
       
          
           </div>
         
         </div>
          
       </div>
        </div>
       
    );
 };
 
 export default Banner;