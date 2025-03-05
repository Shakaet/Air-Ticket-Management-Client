import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-700 text-gray-300 py-10 mt-10">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    
                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">FlyEasy</h2>
                        <p className="mt-2 text-sm">
                            Your trusted partner for easy & affordable flight bookings. Explore the world with us!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-blue-400">Home</a></li>
                            <li><a href="/" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="/" className="hover:text-blue-400">Flights</a></li>
                            <li><a href="/" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <p className="mt-2 text-sm">📍 123 Skyway, Travel City</p>
                        <p>📞 +1 (234) 567-890</p>
                        <p>✉ support@flyeasy.com</p>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start mt-3 space-x-4">
                            <a href="#" className="text-blue-400 hover:text-white"><FaFacebookF size={20} /></a>
                            <a href="#" className="text-blue-400 hover:text-white"><FaTwitter size={20} /></a>
                            <a href="#" className="text-blue-400 hover:text-white"><FaInstagram size={20} /></a>
                            <a href="#" className="text-blue-400 hover:text-white"><FaLinkedinIn size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm border-t border-gray-700 mt-8 pt-4">
                    © {new Date().getFullYear()} FlyEasy. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
