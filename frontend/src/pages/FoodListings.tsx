import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Clock, Package, ChevronRight, Info } from 'lucide-react';

const listings = [
  {
    id: 1,
    type: 'Cooked Meals',
    quantity: '25 boxes',
    location: 'Downtown, Springfield',
    expiry: '4 hours remaining',
    donor: 'Sunshine Bistro',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop',
    category: 'Hot Food',
  },
  {
    id: 2,
    type: 'Fresh Vegetables',
    quantity: '15 kg',
    location: 'West End Market',
    expiry: '2 days remaining',
    donor: 'Green Grocers',
    image: 'https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=2071&auto=format&fit=crop',
    category: 'Produce',
  },
  {
    id: 3,
    type: 'Bakery Items',
    quantity: '40 assorted',
    location: 'East Side Bakery',
    expiry: '12 hours remaining',
    donor: 'The Daily Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop',
    category: 'Bakery',
  },
  {
    id: 4,
    type: 'Dairy Products',
    quantity: '10 liters milk',
    location: 'Northside Dairy',
    expiry: '24 hours remaining',
    donor: 'Fresh Farm',
    image: 'https://images.unsplash.com/photo-1550583724-125581cc255b?q=80&w=1974&auto=format&fit=crop',
    category: 'Dairy',
  },
];

const FoodListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hot Food', 'Produce', 'Bakery', 'Dairy'];

  const filteredListings = listings.filter(item => 
    (activeCategory === 'All' || item.category === activeCategory) &&
    (item.type.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Food Donations</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by food type or location..."
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          <div className="flex gap-2 mt-8 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100'
                    : 'bg-white text-gray-600 border border-gray-100 hover:border-emerald-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={item.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/40 transition-all group"
            >
              <div className="relative h-56">
                <img src={item.image} alt={item.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 border border-emerald-100 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.type}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      by <span className="font-semibold text-emerald-600">{item.donor}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Package className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium">{item.quantity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium">{item.expiry}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                  Request Food
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No donations found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodListings;
