import Banner from "./Banar/Banner";
import HowItWork from "./Banar/HowItWork/HowItWork";
import FeaturedFoods from "./Cart/FeaturedFoods";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturedFoods></FeaturedFoods>
           <HowItWork></HowItWork>
        </div>
    );
};

export default Home;