import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Users, ArrowRight, Star, 
  Briefcase, MapPin, CreditCard, ShieldCheck,
  FileText, Download 
} from 'lucide-react';

// 1. IMPORT THE PDF FROM ASSETS
import EventOverviewPDF from '../../assets/W12509965233.pdf';

const StackHackathonDetails = () => {
  const themes = [
    { name: "Education", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=400" },
    { name: "Finance", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400" },
    { name: "Health", img: "https://www.healthcheckup.co.in/uploads/blogpost/hearthealth-compressor.jpg" },
    { name: "Automobile", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400" },
    { name: "AI & ML", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400" },
    { name: "Agriculture", img: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=400" },
    { name: "VR / AR", img: "https://content.kaspersky-labs.com/fm/press-releases/55/553e0baf3a1fa0ebdf31751fc2435066/processed/security-and-privacy-risks-of-ar-and-vr-1-q75.jpg" },
    { name: "VLSI Design", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400" },
    { name: "Embedded", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400" }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigator = useNavigate();

  return (
    <div className="bg-[#f8fafc] overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600" 
            className="w-full h-full object-cover" 
            alt="Tech Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/95 via-[#0a0d14]/90 to-[#0a0d14]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}}>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">Innovation Launchpad</span>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              STACK <span className="text-blue-500">HACKATHON</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200/80 font-medium italic">"Where Ideas Turn Into Startups"</p>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE DETAILS BAR */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <CreditCard className="text-blue-600" size={28} />
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Entry Fee</p>
              <p className="text-lg font-bold text-gray-900">₹99 <span className="text-sm font-normal text-gray-500">/ Team</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0">
            <Users className="text-blue-600" size={28} />
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Team Size</p>
              <p className="text-lg font-bold text-gray-900">3 Members <span className="text-sm font-normal text-gray-500">/ Max</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" size={28} />
            <div>
              <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
              <p className="text-lg font-bold text-gray-900">API Technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WHY STACK HACKATHON? */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Empowering Next-Gen Founders</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>API Technologies hosts the STACK Hackathon to identify and nurture raw talent. This is not just a coding contest; it is a gateway for students to enter the professional tech ecosystem.</p>
              <p>We provide the mentorship and the platform—you provide the solution. The most promising projects don't just win prizes; they gain a business partner for life.</p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
              <Star className="mb-3" size={32} />
              <h4 className="font-bold text-lg mb-1">Partnership</h4>
              <p className="text-xs text-blue-100 opacity-90">Top 3 ideas will partner with API Technologies to launch their startups.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl text-white shadow-lg">
              <Briefcase className="mb-3 text-blue-400" size={32} />
              <h4 className="font-bold text-lg mb-1">23 Internships</h4>
              <p className="text-xs text-gray-400">Direct career opportunities at API Technologies for standout performers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRIZE POOL */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Reward Excellence</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-yellow-50 border border-yellow-100 p-8 rounded-3xl min-w-[280px]">
              <Trophy className="text-yellow-500 mx-auto mb-4" size={48} />
              <p className="text-gray-500 font-bold uppercase text-xs mb-1">Winner</p>
              <h3 className="text-4xl font-black text-gray-900">₹23,000</h3>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl min-w-[280px]">
              <Trophy className="text-slate-400 mx-auto mb-4" size={48} />
              <p className="text-gray-500 font-bold uppercase text-xs mb-1">Runner Up</p>
              <h3 className="text-4xl font-black text-gray-900">₹9,000</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THEMES */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Innovation Themes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {themes.map((theme, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group relative h-32 rounded-xl overflow-hidden cursor-pointer shadow-sm"
            >
              <img src={theme.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={theme.name} />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-blue-900/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-2 text-center">
                <h4 className="text-white text-xs md:text-sm font-bold uppercase tracking-tight">{theme.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. DOCUMENTATION SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-blue-200">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Event Overview Document</h3>
                <p className="text-sm text-gray-500">Download the full hackathon guidelines, rules, and timeline.</p>
              </div>
            </div>
            
            {/* 2. USE THE IMPORTED VARIABLE HERE */}
            <a 
              href={EventOverviewPDF} 
              download="W12509965233.pdf"
              className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold border border-blue-200 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* 7. TRUSTED REGISTRATION */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 text-center">
            <ShieldCheck className="text-green-500 mx-auto mb-6" size={56} />
            <h2 className="text-2xl font-bold mb-4">Secure Your Spot</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              To maintain the integrity of the competition, please trust only the official email for all communications.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
              <p className="text-xs font-black text-blue-600 uppercase mb-2 tracking-widest">Official Registration Channel</p>
              <a href="mailto:stackhackathon@apitechnologies.com" className="text-lg md:text-xl font-bold text-blue-900 break-all hover:underline">
                stackhackathon@apitechnologies.com
              </a>
            </div>

            <button 
              onClick={() => navigator('/events/stack-hackathon-2026/register-form')}
              className="w-full md:w-auto bg-[#0a0d14] text-white px-12 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 mx-auto">
              Request Registration Form <ArrowRight size={18} />
            </button>

            <div className="mt-8 flex justify-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Starts: 11-07 -2026</span>
              <span className="text-red-400">Deadline: 23-08-2026</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StackHackathonDetails;