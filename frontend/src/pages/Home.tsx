import { motion } from 'framer-motion';
import { ArrowRight, Heart, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Meals Saved', value: '125,000+' },
    { label: 'Active Donors', value: '2,400+' },
    { label: 'NGO Partners', value: '450+' },
    { label: 'Cities Covered', value: '12' },
  ];

  const steps = [
    {
      title: 'List Surplus Food',
      desc: 'Donors list extra food with details like quantity and expiry.',
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: 'NGOs Notified',
      desc: 'Nearby NGOs receive instant alerts about available food.',
      icon: <BellIcon className="h-6 w-6 text-emerald-600" />,
    },
    {
      title: 'Safe Pickup',
      desc: 'NGOs coordinate and collect food for distribution.',
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                <span>Join our mission to end hunger</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Reduce Food <span className="text-emerald-600">Waste</span>, Feed Lives.
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                The bridge between surplus food and those who need it most. Join 2,000+ donors making a real impact today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup?role=donor"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200"
                >
                  Donate Food
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/listings"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
                >
                  Request Food
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-4 text-gray-500 text-sm font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                    </div>
                  ))}
                </div>
                <span>Trusted by 500+ local organizations</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                  alt="Food distribution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Daily Impact</p>
                    <p className="text-xl font-bold text-gray-900">1,200+ Meals</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How FoodShare Works</h2>
            <p className="text-gray-600">A simple, transparent process to ensure surplus food reaches those who need it most with minimal waste.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-900 rounded-[48px] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative px-8 py-20 lg:p-24 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
                Ready to make a difference in your community?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/signup"
                  className="px-8 py-4 bg-white text-emerald-900 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-colors"
                >
                  Start Donating
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-emerald-800 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BellIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export default Home;
