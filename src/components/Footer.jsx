import { Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-56 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="mb-4">
              <img src={logo} alt="BPL Dream 11 Logo" className="h-10" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the thrill of cricket fantasy league. Build your dream
              team and compete with millions of players worldwide.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} />
                <span>support@bpldream11.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-[#E7FE29] transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#fixtures"
                  className="text-gray-300 hover:text-[#E7FE29] transition-colors text-sm"
                >
                  Fixtures
                </a>
              </li>
              <li>
                <a
                  href="#teams"
                  className="text-gray-300 hover:text-[#E7FE29] transition-colors text-sm"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="#schedules"
                  className="text-gray-300 hover:text-[#E7FE29] transition-colors text-sm"
                >
                  Schedules
                </a>
              </li>
              <li>
                <a
                  href="#rules"
                  className="text-gray-300 hover:text-[#E7FE29] transition-colors text-sm"
                >
                  Rules & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter and get the latest updates about
              tournaments and player news.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#E7FE29] transition-colors"
              />
              <button className="w-full bg-[#E7FE29] text-[#06091A] font-semibold py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We'll never share your email. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 BPL Dream 11. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="hover:text-[#E7FE29] transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#E7FE29] transition-colors">
              Terms of Service
            </a>
            <a
              href="#contact"
              className="hover:text-[#E7FE29] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
