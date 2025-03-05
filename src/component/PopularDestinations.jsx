import { motion } from "framer-motion";

const destinations = [
    { name: "Paris", image: "https://i.ibb.co.com/xqCXYNRQ/download7.jpg" },
    { name: "Dubai", image: "https://i.ibb.co.com/b09b31N/download1.jpg" },
    { name: "New York", image: "https://i.ibb.co.com/FLkpfW1b/download9.jpg" },
];

const PopularDestinations = () => {
    return (
        <section className="text-center py-10">
            <h2 className="text-3xl font-bold mb-12 mt-12 ">Popular Destinations</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {destinations.map((dest, index) => (
                    <motion.div 
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={dest.image} alt={dest.name} className="w-full h-60 object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-all">
                            {dest.name}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PopularDestinations;
