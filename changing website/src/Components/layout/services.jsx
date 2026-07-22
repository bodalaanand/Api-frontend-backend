import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  ArrowRight, Code, Globe, Megaphone, Users, 
  Microscope, ShieldCheck, GraduationCap, 
  ShoppingCart, Building2, Landmark, Laptop, Cpu
} from 'lucide-react';

const ServicesSection = () => {
  const containerRef = useRef(null);
  
  // Track scroll for background parallax effects
  const { scrollXProgress } = useScroll({
    container: containerRef
  });

  // Unique motion: The background "Circuit" lines move at a different speed
  const backgroundX = useTransform(scrollXProgress, [0, 1], ["0%", "-15%"]);
  const physicsSpring = { damping: 20, stiffness: 100 };
  const smoothBackgroundX = useSpring(backgroundX, physicsSpring);

  //https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=600 (image12.jpg replace) - custom software development
  const services = [
    { title: "Koyyana Renuka", icon: <Code />, id: "01", img: "images/Renu 2.jpeg" },
    { title: "Mom's Special Day", icon: <Code />, id: "02", img: "images/Renu 13.jpeg" },
    { title: "Birthday Girl 🎂", icon: <Code/>, id: "03", img: "images/Renu 3.jpeg" },
    { title: "Moment of the Day", icon: <Code />, id: "04", img: "images/Renu 16.jpeg" },
    { title: "Pricesssssss", icon: <Code />, id: "05", img: "images/Renu 4.jpeg" },
    { title: "Annayyaaaaaaaa", icon: <Code/>, id: "06", img: "images/Renu 25.jpeg" },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* UNIQUE BACKGROUND: Moving Tech Grid */}
      <motion.div 
        style={{ x: smoothBackgroundX }}
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
      >
        <svg width="200%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1a237e" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1a237e] font-black uppercase tracking-[0.4em] text-xs mb-4"
          >
            HER SPECIAL MOMENTS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-5xl font-extrabold text-[#0a0d14] leading-tight"
          >
            Creating Beautiful Memories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a237e] to-blue-500">
              for the Birthday Girl.
            </span>
          </motion.h2>
        </div>

        {/* DEPTH-SCROLL CONTAINER */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-12 pb-20 no-scrollbar snap-x snap-mandatory"
          style={{ perspective: "1000px" }}
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
          
          {/* Spacer for final card centering */}
          <div className="min-w-[20vw] h-1" />
        </div>

        {/* INDUSTRIES SUB-SECTION */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex flex-wrap items-center gap-8 border-t border-gray-100 pt-12"
        >
          <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">Industries:</span>
          {[
            { label: 'Education', icon: <GraduationCap size={18}/> },
            { label: 'E-Commerce', icon: <ShoppingCart size={18}/> },
            { label: 'Real Estate', icon: <Building2 size={18}/> },
            { label: 'Public Sector', icon: <Landmark size={18}/> }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-600 hover:text-[#1a237e] transition-colors cursor-default">
              <span className="text-[#1a237e]/50">{item.icon}</span>
              <span className="font-semibold text-sm">{item.label}</span>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-w-[320px] md:min-w-[450px] h-[550px] relative snap-center group rounded-[2rem] overflow-hidden"
    >
      {/* Image Layer with Parallax-ready Zoom */}
      <div className="absolute inset-0">
        <img 
          src={service.img} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-[#0a0d14]/40 group-hover:bg-[#1a237e]/60 transition-colors duration-500" />
      </div>

      {/* Floating ID Number */}
      <div className="absolute top-10 right-10 text-white/20 text-7xl font-black italic">
        {service.id}
      </div>

      {/* Glass Content Card */}
      <div className="absolute bottom-6 left-6 right-6 p-8 rounded-[1.5rem] bg-white/10 backdrop-blur-md border border-white/20 text-white transform transition-transform duration-500">
        <div className="w-14 h-14 bg-white text-[#1a237e] rounded-xl flex items-center justify-center mb-6 shadow-xl">
          {React.cloneElement(service.icon, { size: 28 })}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 tracking-tight">
          {service.title}
        </h3>
        
        <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100">
          Celebrate a day filled with love, laughter, and unforgettable memories.May your year ahead sparkle with happiness and success.
        </p>

        <button className="flex items-center gap-3 text-white font-bold text-sm group/btn">
          CELEBRATE TODAY 
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#1a237e] transition-all">
            <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default ServicesSection;