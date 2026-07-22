import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import { 
  History, 
  Target, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Handshake, 
  ArrowRight,
  Award
} from 'lucide-react';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  useEffect(() => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);

  const milestones = [
    {
      date: "June 2024",
      title: "Foundation",
      image: "images/image12.jpg",
      desc: "Founded as Software Private Limited with a vision for reliable, high-quality software development."
    },
    {
      date: "2024–2025",
      title: "Expansion",
      desc: "Strengthened engineering capabilities and expanded into enterprise software and digital transformation."
    },
    {
      date: "27 Dec 2025",
      title: "API Launch",
      desc: "Official rebranding to API Technologies, marking our transition to a future-ready enterprise partner."
    },
    {
      date: "Present",
      title: "Global Partner",
      desc: "Operating as a trusted transformation partner delivering scalable, performance-driven solutions."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION (Breadcrumb style) */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0a0d14]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="images/Renu 2.jpeg"  //https://img.freepik.com/free-photo/happy-male-entrepreneur-using-desktop-pc-while-working-office-there-are-people-background_637285-1037.jpg?semt=ais_hybrid&w=740&q=80 
            alt="API Team" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a237e]/60 to-[#0a0d14]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4"
          >
            About Us
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
            <span>Home</span>
            <ArrowRight size={14} />
            <span className="text-white">Our Identity</span>
          </div>
        </div>
      </section>

      {/* 2. OUR ORIGIN (The Rebranding Story) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Evolution</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              From Software to <br />
              <span className="text-[#1a237e]">API Technologies</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              API Technologies traces its origins to Software Private Limited, established in August 2024. As the organization matured, a strategic decision was taken to rebrand to reflect our enterprise-focused direction.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Launched officially on 27 December 2025, API Technologies represents a transition to a modern, future-ready technology company delivering scalable, secure, and enterprise-grade digital solutions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-50">
               <img src="images/Renu 1.jpeg" alt="Strategy" className="w-full h-full object-cover" />  {/*https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000 */}
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#1a237e] p-8 rounded-2xl text-white hidden md:block shadow-xl">
              <div className="text-4xl font-black mb-1">2025</div>
              <div className="text-xs uppercase tracking-widest opacity-80 font-bold">New Era Launched</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE JOURNEY TIMELINE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Milestones</h2>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 md:w-1/2">
                   <div className={`p-8 bg-white rounded-3xl shadow-sm border border-gray-100 ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                      {/* <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-2xl mb-4" /> */}
                      <span className="text-blue-600 font-bold text-lg">{item.date}</span>
                      <h3 className="text-2xl font-bold text-gray-900 my-2">{item.title}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                   </div>
                </div>
                
                {/* Center Circle */}
                <div className="w-12 h-12 rounded-full bg-[#1a237e] border-4 border-white shadow-lg z-10 flex items-center justify-center text-white">
                  <History size={20} />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY API (Core Values) */}
      <section className="py-24 bg-[#0a0d14] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-blue-400 font-bold uppercase text-sm tracking-widest">The API Edge</span>
          <h2 className="text-4xl font-bold mt-4">Why Partner With Us</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck />, title: "Enterprise Delivery", text: "Robust IT delivery and high-level project governance." },
            { icon: <Award />, title: "Best Practices", text: "Global IT standards, security, and strict compliance." },
            { icon: <Cpu />, title: "Expert Engineering", text: "Experienced consultants and process-driven teams." },
            { icon: <BarChart3 />, title: "Scalable Growth", text: "Solutions designed to grow alongside your business." }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-blue-600/20 text-white">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;