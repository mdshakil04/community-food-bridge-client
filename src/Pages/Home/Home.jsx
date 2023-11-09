import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import Banner from "./Banner/Banner";
import HelpingReason from "./HelpingReason/HelpingReason";
import LatestActivities from "./LatestActivities/LatestActivities";
import MakeDonation from "./MakeDonation/MakeDonation";
import Volunter from "./Volunter/Volunter";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div className="">
                    <Helmet>
                        <title>Available Foods</title>
                    </Helmet>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <HelpingReason></HelpingReason>
            <LatestActivities></LatestActivities>
            <Volunter></Volunter>
            <MakeDonation></MakeDonation>
        </div>
    );
};

export default Home;