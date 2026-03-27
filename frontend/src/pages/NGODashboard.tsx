import { Search, Clock, Package, Bell, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const NGODashboard = () => {
  const activeRequests = [
    { id: 1, food: 'Mixed Meals', donor: 'Sunshine Bistro', status: 'Pending Pickup', time: 'Collected in 30m' },
    { id: 2, food: 'Fresh Produce', donor: 'Green Grocers', status: 'Approved', time: 'Pickup by 6 PM' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">NGO Dashboard</h1>
            <p className="text-gray-500">Welcome back, Hope Foundation!</p>
          </div>
          <Link
            to="/listings"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
          >
            <Search className="h-5 w-5" />
            Find Food
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Meals Distributed', value: '3,420', icon: <Package className="text-emerald-600" />, trend: '+18%' },
            { label: 'Families Helped', value: '850', icon: <ShieldCheck className="text-emerald-600" />, trend: '+12%' },
            { label: 'Active Requests', value: '2', icon: <Clock className="text-emerald-600" />, trend: 'Stable' },
            { label: 'Community Impact', value: 'Gold', icon: <TrendingUp className="text-emerald-600" />, trend: 'Top 5%' },
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
            {/* Active Requests */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Active Requests</h2>
                <Link to="/history" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View History</Link>
              </div>
              <div className="divide-y divide-gray-50">
                {activeRequests.map((item) => (
                  <div key={item.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                        <Package className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.food}</h4>
                        <p className="text-sm text-gray-500">from {item.donor} • {item.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status}
                      </span>
                      <button className="bg-emerald-600 text-white p-2 rounded-xl hover:bg-emerald-700">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Donations Map */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Live Food Map</h2>
                <span className="text-sm text-emerald-600 font-bold">12 new listings today</span>
              </div>
              <div className="h-80 bg-gray-100 rounded-[24px] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-60"
                  alt="map"
                />
                {/* Mock Markers */}
                <div className="absolute top-1/4 left-1/3 p-2 bg-emerald-600 rounded-full shadow-lg border-2 border-white animate-bounce">
                  <Package className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-1/3 right-1/4 p-2 bg-emerald-600 rounded-full shadow-lg border-2 border-white">
                  <Package className="h-4 w-4 text-white" />
                </div>
                <div className="absolute top-1/2 right-1/2 p-2 bg-emerald-600 rounded-full shadow-lg border-2 border-white">
                  <Package className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Notifications */}
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Alerts</h2>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-6">
                {[
                  { title: 'New Donation Alert', time: '10m ago', desc: '50kg Rice available at Community Kitchen.' },
                  { title: 'Request Confirmed', time: '45m ago', desc: 'Sunshine Bistro approved your request.' },
                  { title: 'Urgent Request', time: '2h ago', desc: 'Shelter B needs 20 meals by tonight.' },
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
              <button className="w-full mt-6 py-3 border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                View All Notifications
              </button>
            </div>

            {/* Impact Stats */}
            <div className="bg-emerald-900 rounded-[32px] p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Goal</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full h-2 bg-emerald-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-emerald-400" />
                  </div>
                </div>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  You've rescued 240kg of food this month. Rescuing 60kg more will reach your goal!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;
