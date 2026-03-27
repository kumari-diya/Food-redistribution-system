import { useState } from 'react';
import { Heart, Globe, ShieldCheck, Target, Award } from 'lucide-react';

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left */}
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                We're on a mission to <span className="text-emerald-600">eliminate</span> food waste.
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                FoodShare was founded on a simple belief: no one should go hungry while good food goes to waste.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-emerald-600 mb-2">40%</h4>
                  <p className="text-sm text-gray-500 font-medium">Food wasted globally</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-emerald-600 mb-2">800M</h4>
                  <p className="text-sm text-gray-500 font-medium">People face hunger</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
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
                <p className="text-sm text-gray-500">
                  A world where every meal finds its way to a plate.
                </p>
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles guiding our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="h-8 w-8" />, title: 'Efficiency', desc: 'Fast redistribution.' },
              { icon: <ShieldCheck className="h-8 w-8" />, title: 'Safety First', desc: 'Secure food handling.' },
              { icon: <Globe className="h-8 w-8" />, title: 'Sustainability', desc: 'Reduce food waste.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] border shadow-sm text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <Award className="h-16 w-16 text-emerald-400 mx-auto mb-8" />

          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Join the Movement
          </h2>

          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Be part of solving hunger and food waste.
          </p>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-xl mx-auto">
            
            <button
              onClick={() => {
                setFormType('donor');
                setShowForm(true);
              }}
              className="w-full sm:w-auto px-10 py-4 bg-white text-emerald-900 rounded-2xl font-bold text-lg hover:bg-emerald-50 active:scale-95 transition-all"
            >
              Become a Donor
            </button>

            <button
              onClick={() => {
                setFormType('ngo');
                setShowForm(true);
              }}
              className="w-full sm:w-auto px-10 py-4 bg-emerald-800 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 active:scale-95 transition-all"
            >
              Partner as NGO
            </button>

          </div>

        </div>
      </section>

      {/* FORM MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          
          <div className="bg-white p-8 rounded-3xl w-[90%] max-w-md">
            
            <h2 className="text-2xl font-bold mb-4">
              {formType === 'donor' ? 'Donor Registration' : 'NGO Registration'}
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowForm(false);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
              }}
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="text"
                placeholder={formType === 'donor' ? 'Org Name' : 'NGO Name'}
                required
                className="w-full px-4 py-3 border rounded-xl"
              />

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="w-full py-3 border rounded-xl"
              >
                Cancel
              </button>

            </form>

          </div>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed top-5 right-5 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg">
          ✅ Submitted Successfully!
        </div>
      )}

    </div>
  );
};

export default About;