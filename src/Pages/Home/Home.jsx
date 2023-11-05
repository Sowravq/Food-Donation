import Banner from "./Banar/Banner";
import HowItWork from "./Banar/HowItWork/HowItWork";
import FeaturedFoods from "./Cart/FeaturedFoods";
import OurApp from "./OurApp/OurApp";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedFoods></FeaturedFoods>
           <HowItWork></HowItWork>
           <OurApp></OurApp>
        </div>
    );
};

export default Home;