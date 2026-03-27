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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGmivs2rrFir-fyjUJrRQXjOeFydVgL_RCA&s",
    category: 'Dairy',
  },
];

const FoodListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showPopup, setShowPopup] = useState(false);

  const categories = ['All', 'Hot Food', 'Produce', 'Bakery', 'Dairy'];

  const filteredListings = listings.filter(item =>
    (activeCategory === 'All' || item.category === activeCategory) &&
    (item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleConfirmRequest = () => {
    setSelectedItem(null);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* Header */}
      <div className="bg-white border-b pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Available Food Donations</h1>

          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by food or location..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="flex items-center gap-2 px-6 py-3 border rounded-2xl">
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mt-6 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl"
          >
            <img src={item.image} alt={item.type} className="h-52 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-bold">{item.type}</h3>
              <p className="text-sm text-gray-500 mb-4">by {item.donor}</p>

              <p className="text-sm">📦 {item.quantity}</p>
              <p className="text-sm">📍 {item.location}</p>
              <p className="text-sm mb-4">⏰ {item.expiry}</p>

              <button
                onClick={() => setSelectedItem(item)}
                className="w-full py-3 bg-emerald-600 text-white rounded-xl"
              >
                Request Food
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty */}
      {filteredListings.length === 0 && (
        <div className="text-center mt-20">
          <Info className="mx-auto mb-3" />
          <p>No results found</p>
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-3">Confirm Request</h2>

            <p>{selectedItem.type}</p>
            <p>{selectedItem.quantity}</p>
            <p>{selectedItem.location}</p>

            <button
              onClick={handleConfirmRequest}
              className="w-full py-2 bg-emerald-600 text-white rounded mt-4"
            >
              Confirm
            </button>

            <button
              onClick={() => setSelectedItem(null)}
              className="w-full py-2 border rounded mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-emerald-600 text-white px-5 py-3 rounded-lg">
          ✅ Request Sent Successfully!
        </div>
      )}

    </div>
  );
};

export default FoodListings;