import { Plus, Settings, Bell, Package, CheckCircle, Clock, MapPin, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonorDashboard = () => {
  const activeDonations = [
    { id: 1, type: 'Mixed Veggies', quantity: '10kg', status: 'Available', time: '2h ago' },
    { id: 2, type: 'Sandwiches', quantity: '15 units', status: 'Pending Pickup', time: '1h ago' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Donor Dashboard</h1>
            <p className="text-gray-500">Welcome back, Sunshine Bistro!</p>
          </div>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
          >
            <Plus className="h-5 w-5" />
            New Donation
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Donated', value: '450 kg', icon: <Package className="text-emerald-600" />, trend: '+12%' },
            { label: 'Meals Provided', value: '1,240', icon: <CheckCircle className="text-emerald-600" />, trend: '+5%' },
            { label: 'Active Listings', value: '3', icon: <Clock className="text-emerald-600" />, trend: 'Stable' },
            { label: 'Impact Score', value: '98', icon: <TrendingUp className="text-emerald-600" />, trend: '+2' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-50 rounded-2xl">
                  {stat.icon}
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  {stat.trend}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Donations */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Active Donations</h2>
                <Link to="/history" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View History</Link>
              </div>
              <div className="divide-y divide-gray-50">
                {activeDonations.map((item) => (
                  <div key={item.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.type}</h4>
                        <p className="text-sm text-gray-500">{item.quantity} • {item.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Settings className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-emerald-900 rounded-[32px] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Pro-tip for Donors</h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Adding clear photos of your donations increases pickup speed by up to 40%. NGOs can better prepare for transport when they see the volume.
                </p>
                <button className="px-6 py-2 bg-white text-emerald-900 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Notifications */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Pickup Completed', time: '3h ago', desc: 'Red Cross NGO picked up your donation.' },
                  { title: 'New Request', time: '5h ago', desc: 'Local Food Bank requested your surplus bread.' },
                  { title: 'Monthly Impact Report', time: '1d ago', desc: 'Your impact report for June is ready!' },
                ].map((notif, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{notif.title}</h4>
                      <p className="text-xs text-gray-500 mb-1">{notif.time}</p>
                      <p className="text-sm text-gray-600">{notif.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Nearby NGOs</h2>
              <div className="h-48 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  alt="map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-emerald-600 p-2 rounded-full shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">There are 12 NGOs within 5km of your location.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
