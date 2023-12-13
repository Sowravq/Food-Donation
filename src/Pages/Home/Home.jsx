 import DonateFood from "../../components/DonateFood/DonateFood";
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
            <DonateFood></DonateFood>
           <OurApp></OurApp>
        </div>
    );
};

export default Home;