import "./DonateFood.css"
const DonateFood = () => {
    return (
       <div className="max-w-5xl mx-auto">
                                 <p className="text-4xl text-center mt-20 mb-20 lg:mb-40 font-bold">Donation Peoples</p>

          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
 
             <div>
               <div className="card ">
                <img className="w-full h-full" src="https://i.ibb.co/4tGLjZr/slide1.jpg" alt="" />
                </div>
             </div>
             <div>
               <div className="card lg:-mt-20">
                <img className="w-full h-full" src="https://i.postimg.cc/2jPpWYdM/0813-fooddrive-fullsize.jpg" alt="" />
                </div>
             </div>
             <div>
               <div className="card">
                <img className="w-full h-full" src="https://i.postimg.cc/qv1j8XVq/N1901-P59003-H.webp" alt="" />
                </div>
             </div>
             <div>
               <div className="card">
                <img className="w-full h-full" src="https://i.postimg.cc/HspwBcty/Food-Pantry-Volunteers.jpg" alt="" />
                </div>
             </div>
             <div>
               <div className="card mt-20">
                <img className="w-full h-full" src="https://i.postimg.cc/c1Tg1DQv/get-help.jpg" alt="" />
                </div>
             </div>
             <div>
               <div className="card">
                <img className="w-full h-full" src="https://i.postimg.cc/yYkd171G/i-Stock-1179824820-394x.webp" alt="" />
                </div>
             </div>
        </div>
       </div>
    );
};

export default DonateFood;