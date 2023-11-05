import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Banner from "./Banner/Banner";
import HelpingReason from "./HelpingReason/HelpingReason";
import LatestActivities from "./LatestActivities/LatestActivities";
import MakeDonation from "./MakeDonation/MakeDonation";
import Volunter from "./Volunter/Volunter";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <HelpingReason></HelpingReason>
            <LatestActivities></LatestActivities>
            <FeaturedFoods></FeaturedFoods>
            <Volunter></Volunter>
            <MakeDonation></MakeDonation>
        </div>
    );
};

export default Home;