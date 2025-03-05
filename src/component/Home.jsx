import { motion } from "framer-motion";
import Banner from "./Banner";
import PopularDestinations from "./PopularDestinations";
import { div } from "framer-motion/client";
import CustomerReviews from "./CustomerReviews";
import WhyChooseUs from "./WhyChooseUs";
import NewsletterSignup from "./NewsletterSignup";
import SpecialOffers from "./SpecialOffers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularDestinations></PopularDestinations>
            <WhyChooseUs></WhyChooseUs>
            <CustomerReviews></CustomerReviews>
            <SpecialOffers></SpecialOffers>
        </div>
    );
};

export default Home;
