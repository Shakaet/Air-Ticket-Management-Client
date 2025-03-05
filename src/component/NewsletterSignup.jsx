const NewsletterSignup = () => {
    return (
        <section className="bg-blue-600 text-white text-center py-10">
            <h2 className="text-3xl font-bold mb-4">Subscribe for Exclusive Offers</h2>
            <p className="mb-4">Stay updated with the latest flight deals.</p>
            <div className="flex justify-center">
                <input type="email" placeholder="Enter your email" className="p-3 rounded-l-md w-64 border-none" />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-r-md">Subscribe</button>
            </div>
        </section>
    );
};

export default NewsletterSignup;
