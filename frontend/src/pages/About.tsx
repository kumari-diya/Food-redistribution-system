import { Heart, Globe, ShieldCheck, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                We're on a mission to <span className="text-emerald-600">eliminate</span> food waste.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                FoodShare was founded on a simple belief: no one should go hungry while good food goes to waste. We've built a platform that connects surplus with scarcity, creating a more sustainable and compassionate world.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-emerald-600 mb-2">40%</h4>
                  <p className="text-sm text-gray-500 font-medium">Of food is wasted globally</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-emerald-600 mb-2">800M</h4>
                  <p className="text-sm text-gray-500 font-medium">People face hunger daily</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team volunteering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                <Heart className="h-10 w-10 text-emerald-600 mb-4" />
                <p className="text-lg font-bold text-gray-900 mb-2">Our Vision</p>
                <p className="text-sm text-gray-500">A world where every meal finds its way to a plate, not a landfill.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every decision we make and every partnership we build.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="h-8 w-8" />, title: 'Efficiency', desc: 'We leverage technology to ensure food is redistributed as quickly and safely as possible.' },
              { icon: <ShieldCheck className="h-8 w-8" />, title: 'Safety First', desc: 'Rigorous standards for food handling and donor verification to protect our community.' },
              { icon: <Globe className="h-8 w-8" />, title: 'Sustainability', desc: 'Reducing carbon emissions by preventing food waste and optimizing logistics.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Impact */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-emerald-400 mx-auto mb-8" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Join the Movement</h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-12">
            Whether you're a restaurant with surplus, an NGO serving the community, or an individual who wants to help, there's a place for you at FoodShare.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-white text-emerald-900 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-colors">
              Become a Donor
            </button>
            <button className="px-10 py-4 bg-emerald-800 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-colors">
              Partner as NGO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
