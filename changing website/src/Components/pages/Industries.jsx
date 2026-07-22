import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Search, 
  Users, 
  Layers, 
  ShieldCheck,
  GraduationCap,
  ShoppingBag,
  Building2,
  Landmark
} from 'lucide-react';

const Industries = () => {
  const allServices = [
    {
      title: "Custom Software",
      category: "Service",
      image: "images/Renu 2.jpeg",  //https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800
      icon: <Code />,
      desc: "Enterprise-grade applications built for long-term scalability."
    },
    {
      title: "Web & Mobile",
      category: "Service",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
      icon: <Smartphone />,
      desc: "High-performance apps for Android, iOS, and Web platforms."
    },
    {
      title: "Digital Marketing",
      category: "Service",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      icon: <Search />,
      desc: "SEO and performance marketing to scale your digital presence."
    },
    {
      title: "Staffing Solutions",
      category: "Service",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
      icon: <Users />,
      desc: "Connecting organizations with top-tier technology talent."
    },
    {
      title: "Education (EdTech)",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800",
      icon: <GraduationCap />,
      desc: "Digital learning platforms and ERPs for modern institutions."
    },
    {
      title: "Retail & E-Commerce",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800",
      icon: <ShoppingBag />,
      desc: "End-to-end commerce platforms with payment integrations."
    },
    {
      title: "Real Estate",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=800",
      icon: <Building2 />,
      desc: "Property management systems and lead analytics tools."
    },
    {
      title: "Public Sector",
      category: "Industry",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
      icon: <Landmark />,
      desc: "Secure e-governance solutions for government departments."
    }
  ];

  return (
    <div className="bg-[#0a0d14] py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Capabilities & Industries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4"
          >
            Comprehensive Technology <br /> 
            <span className="text-gray-500">& Business Solutions.</span>
          </motion.h2>
        </div>

        {/* The Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 rounded-3xl overflow-hidden">
  {allServices.map((item, index) => (
    <motion.div
      key={index}
      className="relative group h-[400px] border-[0.5px] border-white/10 overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={item.image} 
          alt={item.title} 
          /* Logic: 
             - grayscale-0: Colored by default (Mobile/Tab)
             - lg:grayscale: Black & White only on Desktop
             - lg:group-hover:grayscale-0: Back to color on hover (Desktop)
          */
          className="w-full h-full object-cover transition-all duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-110"
        />
        {/* Overlay Logic:
            - bg-black/40: Lighter overlay on mobile so images pop
            - lg:bg-black/60: Darker on desktop for that high-end look
        */}
        <div className="absolute inset-0 bg-black/40 lg:bg-black/60 lg:group-hover:bg-blue-900/40 transition-colors duration-500" />
      </div>

      {/* Content Box */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        {/* Mobile: blue background for icon | Desktop: transparent until hover */}
        <div className="mb-4 w-12 h-12 bg-blue-600 lg:bg-white/10 lg:backdrop-blur-md rounded-xl flex items-center justify-center text-white lg:group-hover:bg-blue-600 transition-colors">
          {item.icon}
        </div>
        
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">
          {item.category}
        </span>
        
        <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
          {item.title}
        </h3>
        
        {/* Mobile: Description visible | Desktop: Visible only on hover */}
        <div className="h-auto lg:h-0 overflow-hidden lg:group-hover:h-16 transition-all duration-500 ease-in-out">
          <p className="text-gray-200 lg:text-gray-300 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Decorative line: Full width on mobile | Grows on desktop hover */}
        <div className="h-1 bg-blue-600 mt-4 w-full lg:w-8 lg:group-hover:w-full transition-all duration-500" />
      </div>
    </motion.div>
  ))}
</div>

        {/* Telangana Gov Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 p-8 bg-gradient-to-r from-[#1a237e] to-[#0d144a] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10"
        >
          <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-2xl">
              <ShieldCheck className="text-white w-10 h-10" />
            </div>
            <div>
              <h4 className="text-white text-xl font-bold">Trusted Government Partner</h4>
              <p className="text-blue-200 text-sm">Successfully delivered kiosk-style digital apps for Telangana Agriculture Department.</p>
            </div>
          </div>
          <button className="bg-white text-[#1a237e] px-8 py-3 rounded-xl font-bold whitespace-nowrap hover:bg-blue-50 transition-colors">
            View Case Study
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;