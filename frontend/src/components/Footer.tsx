import { Link } from 'react-router-dom';
import { Utensils, Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Utensils className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">FoodShare</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connecting food donors with those in need to reduce waste and fight hunger in our communities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/listings" className="text-gray-600 hover:text-emerald-600 text-sm">Browse Food</Link></li>
              <li><Link to="/donate" className="text-gray-600 hover:text-emerald-600 text-sm">Donate Food</Link></li>
              <li><Link to="/ngo-signup" className="text-gray-600 hover:text-emerald-600 text-sm">Register as NGO</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-emerald-600 text-sm">Our Mission</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-600 hover:text-emerald-600 text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-emerald-600 text-sm">FAQs</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-emerald-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-emerald-600 text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Get updates on local food redistribution efforts.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 FoodShare Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Twitter className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer" />
            <Instagram className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer" />
            <Github className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer" />
            <Mail className="h-5 w-5 text-gray-400 hover:text-emerald-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
