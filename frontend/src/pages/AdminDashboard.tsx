import { Users, Package, AlertTriangle, TrendingUp, Search, Filter, MoreVertical, ShieldCheck, UserPlus, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const users = [
    { id: 1, name: 'Sunshine Bistro', type: 'Donor', status: 'Verified', impact: 'High' },
    { id: 2, name: 'Hope Foundation', type: 'NGO', status: 'Verified', impact: 'Medium' },
    { id: 3, name: 'John Doe', type: 'Donor', status: 'Pending', impact: 'New' },
    { id: 4, name: 'City Shelter', type: 'NGO', status: 'Verified', impact: 'High' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Console</h1>
            <p className="text-gray-500">System Overview & Management</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all">
              <FileText className="h-5 w-5" />
              Reports
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
              <UserPlus className="h-5 w-5" />
              Add User
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Users', value: '2,840', icon: <Users className="text-blue-600" />, bg: 'bg-blue-50' },
            { label: 'Active Donations', value: '156', icon: <Package className="text-emerald-600" />, bg: 'bg-emerald-50' },
            { label: 'Pending Verifications', value: '12', icon: <AlertTriangle className="text-amber-600" />, bg: 'bg-amber-50' },
            { label: 'Total Impact', value: '124.5 tons', icon: <TrendingUp className="text-purple-600" />, bg: 'bg-purple-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
              <div className={`${stat.bg} p-3 w-fit rounded-2xl mb-4`}>
                {stat.icon}
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* User Management Table */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900">User Management</h2>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button className="p-2 border border-gray-100 rounded-xl hover:bg-gray-50">
                  <Filter className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Impact</th>
                  <th className="px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                          {user.name[0]}
                        </div>
                        <span className="font-bold text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-600">{user.type}</td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        user.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {user.status === 'Verified' && <ShieldCheck className="h-3 w-3" />}
                        {user.status}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600`}>
                        {user.impact}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-gray-50/50 border-t border-gray-50 text-center">
            <button className="text-sm font-bold text-emerald-600 hover:text-emerald-700">View All 2,840 Users</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
