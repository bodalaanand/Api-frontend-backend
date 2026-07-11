import React, { useState, useEffect } from 'react';
import { 
  MoveRight, Plus, Play, Target, Rocket, ShieldCheck, 
  Zap, ArrowUpRight, Cpu, BarChart3, Handshake, CheckCircle2,
  GraduationCap, Building2, Vote, ShoppingBag, Users, Globe 
} from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import ServicesSection from '../layout/services';

const HomePage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 24);
      mouseY.set(e.clientY - 24);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

//https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400  -- title: It consultancy image

  const services = [
    { title: "Infrastructure Technology", desc: "Accelerate innovation with world-class tech teams.", img: "data:image/jpeg;base64,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" },
    { title: "IT Consultancy & Solution", desc: "Expert guidance for your digital transformation journey.", img: "/images/image12.jpg" },
    { title: "Online Presence (Marketing)", desc: "Elevate your brand with data-driven digital strategies.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" },
    { title: "Business Services", desc: "Scalable solutions designed for modern enterprise growth.", img: "data:image/jpeg;base64,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" }
  ];

  const points = [
    {
      title: "Enterprise-Grade Delivery",
      desc: "Robust IT delivery and project governance aligned with global engineering standards.",
      icon: <ShieldCheck className="text-blue-500" size={20} />,
      img: "images/image12.jpg"  //https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500
    },
    {
      title: "Security & Compliance",
      desc: "Adherence to global IT best practices, ensuring mission-critical security and compliance.",
      icon: <Cpu className="text-blue-500" size={20} />,
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500"
    },
    {
      title: "Expert Engineering",
      desc: "Experienced technology consultants and engineering teams delivering process-driven execution.",
      icon: <BarChart3 className="text-blue-500" size={20} />,
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500"
    },
    {
      title: "Scalable Growth",
      desc: "Future-ready digital platforms designed to help enterprises scale and compete globally.",
      icon: <Handshake className="text-blue-500" size={20} />,
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500"
    }
  ];

  const projects = [
    {
      title: "Future School ERP Application",
      category: "Education Technology",
      tag: "Flagship Solution",
      icon: <GraduationCap size={24} />,
      desc: "A comprehensive education ERP providing end-to-end digital enablement for 10+ schools.",
      stats: "10+ Institutions",
      img: "images/image12.jpg" //https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=500
    },
    {
      title: "Real Ecosystem",
      category: "Property Management",
      tag: "Enterprise Grade",
      icon: <Building2 size={24} />,
      desc: "Scalable web and mobile applications for developers and brokers to manage listings and leads.",
      stats: "End-to-End CRM",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500"
    },
    {
      title: "Survey App",
      category: "Data Analytics",
      tag: "Secure & Scalable",
      icon: <Vote size={24} />,
      desc: "Structured field data collection and real-time analytics for secure survey management.",
      stats: "Real-time Insights",
      img: "data:image/png;base64,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"
    },
    {
      title: "E-Commerce Platforms",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "High-performance platforms supporting product lifecycles and secure payment processing.",
      stats: "Cloud-Ready",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500"
    }
  ];

  return (
    <div className="bg-[#0a0d14] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center pb-24 md:pb-48">
        <motion.div style={{ x: sx, y: sy }} className="fixed top-0 left-0 w-12 h-12 border-2 border-blue-500/40 pointer-events-none z-50 hidden lg:block" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/70 to-transparent z-10" />
          <img src="images/image12.jpg" alt="Hero" className="w-full h-full object-cover" />
        </div>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <span className="w-10 h-[2px] bg-blue-500 inline-block"></span> Technology Related Consultancy
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              We transform ideas <br /> <span className="text-white/80">into technology</span>
            </motion.h1>
            <button className="group bg-blue-900 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold transition-all flex items-center gap-3">
              Read More <MoveRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </div>
        </div> */}
      </section>

      {/* 2. OVERLAPPING SERVICE CARDS */}
     <section className="relative z-30 -mt-24 md:-mt-40 px-4 max-w-7xl mx-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((service, idx) => (
      <motion.div 
        key={idx} 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: idx * 0.1 }} 
        viewport={{ once: true }} 
        className="group relative h-80 bg-white rounded-lg overflow-hidden shadow-2xl lg:hover:-translate-y-4 transition-all duration-500 cursor-pointer"
      >
        {/* IMAGE LOGIC: 
            Mobile/Tab: Visible (opacity-100)
            Web (lg): Faint (lg:opacity-10) and full on hover (lg:group-hover:opacity-100) 
        */}
        <img 
          src={service.img} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-100 lg:opacity-10 lg:group-hover:opacity-100 transition-opacity duration-500" 
        />

        {/* CONTENT OVERLAY LOGIC:
            Mobile/Tab: Dark blue overlay active so text is readable
            Web (lg): White background that turns blue only on hover
        */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end 
          bg-blue-900/70 lg:bg-white/90 
          lg:group-hover:bg-blue-900/80 transition-colors duration-500"
        >
          <div className="w-12 h-12 bg-blue-500 lg:bg-blue-100 rounded-lg mb-6 flex items-center justify-center text-white lg:text-blue-600 lg:group-hover:bg-blue-500 lg:group-hover:text-white transition-colors">
            <Plus size={24} />
          </div>
          
          <h3 className="text-xl font-bold text-white lg:text-gray-900 lg:group-hover:text-white mb-2">
            {service.title}
          </h3>
          
          <p className="text-sm text-gray-100 lg:text-gray-600 lg:group-hover:text-gray-200 line-clamp-2">
            {service.desc}
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-white lg:text-blue-600 lg:group-hover:text-white font-bold text-sm">
            Read More <MoveRight size={16} />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
                  
      {/* 3. WHO WE ARE */} {/*(image12.jpg replace)https://digi117.com/wp-content/uploads/2017/05/photo5195332693854891117-900x600.jpg*/} {/* https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600*/}
      <section className="relative py-24 md:py-40 bg-[#0a0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 relative w-full h-[400px] md:h-[500px]">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="absolute left-0 top-0 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-2xl border-4 border-[#0a0d14] z-10">
              <img src="images/image12.jpg" alt="Team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="absolute right-0 bottom-0 w-2/3 h-2/3 rounded-xl overflow-hidden shadow-2xl border-4 border-[#0a0d14] z-20">
              <img src="images/image12.jpg" alt="Consulting" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="flex-1 space-y-8">
            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Highly Tailored IT Design, Management & Support Services.</h2>
            <p className="text-gray-400 text-lg">Accelerate innovation with Good tech teams. We match you to remote teams for all your software needs.</p>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-6 cursor-pointer group">
              <div className="relative w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Play fill="white" size={24} />
                <div className="absolute inset-0 rounded-full border border-blue-400 animate-ping" />
              </div>
              <span className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">How we work</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <span className="text-[#1a237e] font-bold uppercase tracking-widest text-sm mb-4 block">Our Foundation</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">Purpose Driven <br /> <span className="text-[#1a237e]">Innovation.</span></h2>
              <p className="text-gray-600 text-lg mb-8">Empowering businesses through intelligent digital solutions.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 gap-8">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 group">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a237e] flex items-center justify-center text-white shrink-0 shadow-lg"><Rocket size={32} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision Statement</h3>
                    <p className="text-xl text-gray-700 font-medium italic">“To be a global leader in delivering innovative software solutions that empower businesses to thrive in the digital era, transforming ideas into impactful technology experiences”</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#1a237e] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20"><Target size={32} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Mission Statement</h3>
                    <p className="text-lg text-blue-50">“At API Technologies, we design and deliver cutting-edge software solutions that simplify complex processes, drive digital transformation, and create measurable value for businesses. We are committed to excellence, innovation, and customer-centric solutions that enable sustainable growth and success.”
</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES COMPONENT */}
      <ServicesSection />

      {/* 6. WHY KAPI */}
      <section className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"><CheckCircle2 size={14} /> Partner for Transformation</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0d14]">Why Choose <span className="text-[#1a237e]">API Technologies?</span></h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 text-sm">API Technologies is a global technology services and solutions company delivering enterprise-grade digital transformation, software engineering, and IT consulting services to organizations across industries. We enable businesses to innovate, scale, and compete in an increasingly digital world through robust, secure, and future-ready technology solutions.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {points.map((item, idx) => (
              <div key={idx} className="group relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all">
                <div className="relative h-40 w-full mb-6 rounded-xl overflow-hidden grayscale group-hover:grayscale-0"><img src={item.img} alt={item.title} className="w-full h-full object-cover" /></div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white group-hover:bg-[#1a237e] group-hover:text-white transition-colors">{item.icon}</div>
                  <h3 className="font-bold text-[#0a0d14]">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-[13px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES */}
      <section className="bg-white pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-[#1a237e] font-bold text-xs uppercase tracking-[0.3em]">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0d14]">Digital Transformation in Action.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
                <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="p-3 w-fit rounded-2xl bg-blue-50 text-[#1a237e] mb-4">{project.icon}</div>
                    <h3 className="text-2xl font-bold text-[#0a0d14] mb-3">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-6">{project.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t">
                    <span className="text-xs font-bold text-gray-700">{project.stats}</span>
                    <ArrowUpRight size={18} className="text-[#1a237e]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;