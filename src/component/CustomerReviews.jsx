import { motion } from "framer-motion";

const reviews = [
    { name: "John Doe", comment: "Amazing service! Highly recommend." },
    { name: "Emma Smith", comment: "Smooth booking process and great prices." },
    { name: "Mark Wilson", comment: "Customer support was very helpful." },
];

const CustomerReviews = () => {
    return (
        <section className="text-center py-10">
            <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <p className="text-lg italic">"{review.comment}"</p>
                        <h4 className="mt-4 font-semibold">{review.name}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
