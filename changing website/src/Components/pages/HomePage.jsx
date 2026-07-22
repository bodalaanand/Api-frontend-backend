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
    { title: "Personalized Birthday Wishes", desc: "Create beautiful birthday messages with custom names, heartfelt quotes, photos, videos, and unique themes.", img: "/images/Renu 6.jpeg"},
    { title: "Birthday Invitation Cards", desc: "Design elegant digital invitations with event details, RSVP options, location maps, and stunning templates for every birthday celebration.", img: "/images/Renu 5.jpeg" },
    { title: "Photo & Memory Gallery", desc: "Collect cherished memories by uploading photos, videos, and special moments into a beautiful gallery that lasts forever.", img: "/images/Renu 8.jpeg" },
    { title: "Celebrate with Music & Effects", desc: "Make every birthday magical with background music, animated balloons, confetti, fireworks, countdowns, and interactive surprises.", img: "/images/Renu 14.jpeg"}
  ]
  const points = [
    {
      title: "Endless Support",
      desc: "No matter how far life takes them, a father's encouragement, wisdom,and unconditional love remain a constant source of strength.",
      icon: <ShieldCheck className="text-blue-500" size={20} />,
      img: "images/Renu 6.jpeg"  //https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500
    },
    {
      title: "First Hero",
      desc: "A father is his daughter's first hero, teaching her courage, kindness,and confidence while standing beside her through every stage of life.",
      icon: <Cpu className="text-blue-500" size={20} />,
      img: "images/Renu 16.jpeg" //https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500
    },
    {
      title: "Unforgettable Memories",
      desc: "From childhood adventures to birthday celebrations, every shared moment becomes a treasured memory that lasts forever.",
      icon: <BarChart3 className="text-blue-500" size={20} />,
      img: "images/Renu 14.jpeg"  //https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500
    },
    {
      title: "Birthday Blessings",
      desc: "Birthdays become even more meaningful when celebrated with a father's love, heartfelt blessings, warm hugs, and joyful moments together.",
      icon: <Handshake className="text-blue-500" size={20} />,
      img: "images/Renu 17.jpeg"   //https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500
    }
  ];

  const projects = [
    {
      title: "Birthday Cake Celebration",
      category: "Education Technology",
      tag: "Flagship Solution",
      // icon: <GraduationCap size={24} />,
      desc: "The happiest moment begins with a glowing birthday cake, heartfelt wishes,and joyful smiles shared with family and friends.",
      stats: "Celebrate with Birthday",
      img: "images/Renu 2.jpeg" //https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=500
    },
    {
      title: "Special Surprise Gifts",
      category: "Property Management",
      tag: "Enterprise Grade",
      // icon: <Building2 size={24} />,
      desc: "Every thoughtfully chosen gift carries love, appreciation, and beautiful memories that make the birthday even more meaningful.",
      stats: "Open the Surprise",
      img: "images/Renu 3.jpeg"  //https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500
    },
    {
      title: "Balloons & Happy Moments",
      category: "Data Analytics",
      tag: "Secure & Scalable",
      // icon: <Vote size={24} />,
      desc: "Colorful balloons, laughter, music, and cheerful decorations create the perfect atmosphere for an unforgettable birthday celebration.",
      stats: "Enjoy the Celebration",
      img: "images/Renu 33.jpeg"
    },
    {
      title: "Family & Precious Memories",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      // icon: <ShoppingBag size={24} />,
      desc: "The most meaningful birthday moments are spent with family and loved ones,creating memories that will be treasured for a lifetime.",
      stats: "View Memories",
      img: "images/Renu 34.jpeg"  //https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500
    }
  ];

  return (
    <div className="bg-[#0a0d14] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center pb-24 md:pb-48">
        <motion.div style={{ x: sx, y: sy }} className="fixed top-0 left-0 w-12 h-12 border-2 border-blue-500/40 pointer-events-none z-50 hidden lg:block" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/70 to-transparent z-10" />
          <img src="images/Renu 33.jpeg" alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-6">
              <span className="w-10 h-[2px] bg-blue-500 inline-block"></span> Celebrate Every Moment
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Make Every Birthday <br /> <span className="text-white/80">Unforgettable moment</span>
            </motion.h1>
              {/* <button className="group bg-blue-900 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold transition-all flex items-center gap-3">
                Read More <MoveRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </button> */}
          </div>
        </div>
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
          
          {/* <div className="mt-4 flex items-center gap-2 text-white lg:text-blue-600 lg:group-hover:text-white font-bold text-sm">
            Read More <MoveRight size={16} />
          </div> */}
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
              <img src="images/Renu 3.jpeg" alt="Team" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="absolute right-0 bottom-0 w-2/3 h-2/3 rounded-xl overflow-hidden shadow-2xl border-4 border-[#0a0d14] z-20">
              <img src="images/Renu 2.jpeg" alt="Consulting" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="flex-1 space-y-8">
            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm">WHY CHOOSE US</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Create Magical Birthday Moments That Last Forever.</h2>
            <p className="text-gray-400 text-lg">From elegant birthday greeting pages and digital invitations to music,photo memories, countdowns, and celebration effects, our platform provides everything you need to make every birthday truly unforgettable.</p>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-6 cursor-pointer group">
              {/* <div className="relative w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Play fill="white" size={24} />
                <div className="absolute inset-0 rounded-full border border-blue-400 animate-ping" />
              </div> */}
              {/* <span className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">How we work</span> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <span className="text-[#1a237e] font-bold uppercase tracking-widest text-sm mb-4 block">FOR RENUKA</span>
              <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">Celebrating Renuka's<br /> <span className="text-[#1a237e]">Beautiful Journey.</span></h2>
              <p className="text-gray-600 text-lg mb-8">Every smile, every memory, and every moment makes your special day even more meaningful. Today is all about celebrating you and wishing you a year filled with happiness, love, success, and endless blessings.</p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 gap-8">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 group">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a237e] flex items-center justify-center text-white shrink-0 shadow-lg"><Rocket size={32} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Happy Birthday, Renuka!</h3>
                    <p className="text-xl text-gray-700 font-medium italic">"May your birthday be filled with love, laughter, and unforgettable memories. May every dream you cherish come true, every challenge become an opportunity, and every new day bring happiness, peace, and success. Wishing you a wonderful year ahead filled with countless reasons to smile."</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#1a237e] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/20"><Target size={32} /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Dear Renuka,</h3>
                    <p className="text-lg text-blue-50">“You are a wonderful person who brings kindness, positivity, and happiness
to everyone around you. On this special day, may your life be filled with
beautiful moments, endless joy, good health, and incredible achievements.

May your smile always shine brightly, your heart remain full of love, and
your journey be blessed with success and unforgettable memories.

Happy Birthday once again! Wishing you a lifetime of happiness,
prosperity, and all the wonderful things you truly deserve."
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6"><CheckCircle2 size={14} /> A BOND THAT LASTS FOREVER</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0d14]">The Beautiful Bond <span className="text-[#1a237e]">Between a Father & Daughter</span></h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-gray-500 text-sm">A father is a daughter's first hero, strongest supporter, and lifelong protector. Every shared smile, warm hug, heartfelt conversation, and unforgettable memory creates a bond filled with unconditional love that grows stronger with every passing year.</p>
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
            <span className="text-[#1a237e] font-bold text-xs uppercase tracking-[0.3em]">CHERISHED BIRTHDAY MOMENTS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0d14]">Celebrating a Beautiful Birthday Girl.</h2>
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