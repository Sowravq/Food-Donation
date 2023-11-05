 
const HowItWork = () => {
    return (
        <div className="p-6 mt-24" style={{backgroundImage: 'url(https://i.ibb.co/MC1T7wj/how-to-create-cool-website-backgrounds-the-ultimate-guide.gif)'}}>
             <div className="mt-8  max-w-7xl mx-auto text-white"  >
             <div>
             <p className=" text-4xl md:text-5xl lg:text-6xl font-bold text-center">How It Works</p>
            <p className="border-b-2 max-w-[500px] mx-auto mt-5 mb-5"></p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 mt-16">
              
               <div className="mt-20">
                <img className="h-[300px] w-full object-cover  rounded-tr-full rounded-tl-full lg:rounded-tr-full" src="https://i.ibb.co/W2yKP1J/istockphoto-1225535094-612x612.jpg" alt="" />
                <div className="mt-4 hover:bg-[#adc930] duration-1000 text-center p-7">
                    <p className="text-2xl mt-4 font-semibold">Food is Donated</p>
                    <p className="mt-5 mb-5">Farms, restaurants, cafeterias, hotels, stadiums, and grocery stores post excess food in under a minute on the Waste No Food app.</p>
                </div>
               </div>
              
               <div className="">
                <img className="h-[300px] w-full object-cover rounded-tr-full  rounded-tl-full" src="https://i.ibb.co/WPJj0cZ/a52177136378505-Y3-Jvc-Cwx-MDcz-LDgz-OSw4-MTgs-Mj-A5.jpg" alt="" />
                <div className="mt-4 hover:bg-[#adc930] duration-1000 text-center p-7">
                    <p className="text-2xl mt-4 font-semibold">Food is Secured</p>
                    <p className="mt-5 mb-5">Pre-vetted charities immediately get notified about food donations and can claim any donations they can use to serve hungry clients.</p>
                </div>
               </div>
              
               <div className="mt-20">
                <img className="h-[300px]  w-full object-cover rounded-tr-full rounded-tl-full lg:rounded-tl-full" src="https://i.ibb.co/Qf1FmpH/istockphoto-472165353-612x612.jpg" alt="" />
                <div className="mt-4 hover:bg-[#adc930] duration-1000 text-center p-7">
                    <p className="text-2xl mt-4 font-semibold">Food Is Picked Up</p>
                    <p className="mt-5 mb-5">The charity, or a network of volunteers, picks up the food and serves it to hungry people.</p>
                    
                </div>
               </div>
                

             </div>
        </div>
        </div>
    );
};

export default HowItWork;