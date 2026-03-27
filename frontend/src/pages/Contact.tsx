import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  // ✅ RESET FORM DATA
  e.target.reset();

  // ✅ SHOW POPUP
  setShowPopup(true);

  setTimeout(() => {
    setShowPopup(false);
  }, 3000);
};

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-emerald-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Have questions about donating or requesting food? Our team is here to help you make an impact.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Info Cards */}
            <div className="space-y-6">
              {[
                { icon: <Mail className="h-6 w-6" />, title: 'Email Us', desc: 'support@foodshare.org', color: 'bg-blue-50 text-blue-600' },
                { icon: <Phone className="h-6 w-6" />, title: 'Call Us', desc: '+91 *******', color: 'bg-emerald-50 text-emerald-600' },
                { icon: <MapPin className="h-6 w-6" />, title: 'Visit Us', desc: 'Roorkee', color: 'bg-purple-50 text-purple-600' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100">
                  <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-emerald-600" />
                  Send a Message
                </h2>

                {/* ✅ FIXED FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                    <select
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Proposal</option>
                      <option>Report an Issue</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                    <textarea
                      rows={6}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-emerald-600 text-white rounded-[20px] font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="h-5 w-5" />
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ✅ POPUP */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-lg z-50">
          ✅ Message Sent Successfully!
        </div>
      )}

    </div>
  );
};

export default Contact;
