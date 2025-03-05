import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/7JGsV7bt/banner-7.png')" }}>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Banner Content */}
            <motion.div 
                className="relative text-center text-white px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    Explore the World with Ease
                </h1>
                <p className="mt-4 mb-8 text-lg md:text-xl">
                    Find the best flights at unbeatable prices.
                </p>
                <Link to={"/allflights"} 
                    className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book Now
                </Link>
            </motion.div>
        </section>
    );
};

export default Banner;
