import Marquee from "react-fast-marquee";
 const Slider = () => {
    return (
        <div>
            <Marquee pauseOnHover={true}>
                <img className="w-[400px]" src="https://i.ibb.co/g476RTp/pngtree-charity-and-donating-food-concept-png-image-8924785.png" alt="" />
                <img className="w-[400px]" src="https://i.ibb.co/D13n6J3/volunteers-donating-food-5383933-4530160.png" alt="" />
                <img  className="w-[350px]" src="https://i.ibb.co/yRNxDHy/man-donating-food-5383932-4530159-1.webp" alt="" />
                <img  className="w-[400px]" src="https://i.ibb.co/BBY6m3W/donation-box-5383927-4530154.webp" alt="" />
            </Marquee>
            
        </div>
    );
 };
 
 export default Slider;