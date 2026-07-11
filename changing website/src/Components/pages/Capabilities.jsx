import React from 'react';
import { motion } from 'framer-motion';
// Fixed imports: replaced CloudZap with Cloud and added other standard icons
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, // Standard Cloud Icon
  Zap,   // Standard Zap Icon
  Globe, 
  Palette, 
  Settings2,
  ChevronRight
} from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      title: "Enterprise Software",
      desc: "Custom development and system integration designed for complex, scalable business ecosystems.",
      icon: <Code2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=800"
    },
    {
      title: "Web & Mobile Apps",
      desc: "High-performance cross-platform applications built with modern frameworks like React and Flutter.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800"
    },
    {
      title: "ERP & CRM Solutions",
      desc: "Streamlining business process automation to enhance operational efficiency and data transparency.",
      icon: <Database className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    },
    {
      title: "Cloud & Managed Services",
      desc: "Cloud-native architecture, seamless migration, and 24/7 managed infrastructure support.",
      icon: <Cloud className="w-8 h-8" />, // Using Cloud instead of CloudZap
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
    },
    {
      title: "Digital Marketing & SEO",
      desc: "Data-driven strategies and search engine optimization to scale your global digital footprint.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://sagartech.co.in/blogs/wp-content/uploads/2024/10/Digital-Marketing-Strategy-Feature-image-min.webp"
    },
    {
      title: "UI/UX Engineering",
      desc: "Human-centric product design focusing on intuitive interfaces and engaging user journeys.",
      icon: <Palette className="w-8 h-8" />,
      image: "https://tenacioustechies.in/wp-content/uploads/2022/08/different-between-ux-and-ui.jpg"
    },
    {
      title: "App Optimization",
      desc: "Continuous maintenance, security patches, and performance tuning for legacy systems.",
      icon: <Settings2 className="w-8 h-8" />,
      image: "https://www.pagetraffic.in/wp-content/uploads/2022/05/app-store-optimization-2.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO HEADER */}
    <section className="py-20 bg-[#0a0d14] text-white relative overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <motion.img 
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.4 }} // Lower opacity to keep text readable
      transition={{ duration: 1.5 }}
      src="images/image12.jpg" // https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000
      alt="Digital Connectivity"
      className="w-full h-full object-cover"
    />
    {/* Gradient Overlay to ensure text contrast on the left side */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
  </div>

  {/* Decorative Blur - Kept but reduced for depth */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a237e]/20 blur-[120px] rounded-full z-0" />

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl"
    >
      <h2 className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
        Our Capabilities
      </h2>
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Empowering Businesses with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-200">
          Future-Ready Solutions
        </span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
        We leverage modern frameworks and cloud-native technologies to meet complex business requirements through agile and scalable delivery models.
      </p>
    </motion.div>
  </div>
</section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#1a237e]/20 group-hover:bg-[#1a237e]/10 transition-colors" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-[#1a237e] shadow-lg">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1a237e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center text-[#1a237e] font-bold text-sm uppercase tracking-wider gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Explore Capability <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. OUR APPROACH SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000" 
              className="rounded-[2rem] shadow-2xl" 
              alt="Our Approach"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-950 p-10 rounded-[2rem] text-white hidden md:block">
              <h4 className="text-3xl font-bold">100%</h4>
              <p className="text-blue-100 text-sm">Outcome Driven</p>
            </div>
          </div>
          
          <motion.div {...{initial: {opacity: 0, x: 20}, whileInView: {opacity: 1, x: 0}}}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Client-Centric Approach</h2>
            <div className="space-y-6">
              {[
                { t: "Strategic Alignment", d: "We collaborate closely to understand objectives and mitigate risks." },
                { t: "Measurable Value", d: "Focus on delivering business impact through structured methodologies." },
                { t: "Governance & Quality", d: "Transparency and consistent quality across all project engagements." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-black-600 font-bold">
                    0{i+1}
                  </div>
                  <div> 
                    <h5 className="font-bold text-lg text-gray-900">{step.t}</h5>
                    <p className="text-gray-600">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-[#1a237e] text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to transform your digital landscape?</h2>
        <button className="bg-white text-[#1a237e] px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
          Consult Our Experts
        </button>
      </section>
    </div>
  );
};

export default Capabilities;