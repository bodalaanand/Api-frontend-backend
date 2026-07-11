import React from "react";
import {  GraduationCap, Building2, Vote, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function CaseStudies(){

    const navigate = useNavigate()

    const casestudies_projects = [
    {
      title: "School Bag ERP Application",  
      category: "Education Technology",
      tag: "Flagship Solution",
      icon: <GraduationCap size={24} />,
      desc: "A comprehensive education ERP providing end-to-end digital enablement for 10+ schools.",
      stats: "10+ Institutions",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=500",
      route: "/schoolbag"
    },
    {
      title: "Real Estate Ecosystem",
      category: "Property Management",
      tag: "Enterprise Grade",
      icon: <Building2 size={24} />,
      desc: "Scalable web and mobile applications for developers and brokers to manage listings and leads.",
      stats: "End-to-End CRM",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=500",
      route: "/realestate"
    },
    {
      title: "Election Survey App",
      category: "Data Analytics",
      tag: "Secure & Scalable",
      icon: <Vote size={24} />,
      desc: "Structured field data collection and real-time analytics for secure survey management.",
      stats: "Real-time Insights",
      img: "data:image/png;base64,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",
      route: "/electionsurvey"
    
    },
    {
      title: "E-Commerce Platforms",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "High-performance platforms supporting product lifecycles and secure payment processing.",
      stats: "Cloud-Ready",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500",
      route: "/ecommerceplatforms"
    },
    {
      title: "E-Commerce Platforms",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "High-performance platforms supporting product lifecycles and secure payment processing.",
      stats: "Cloud-Ready",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500",
      route: "/ecommerceplatforms"
    },
    {
      title: "E-Commerce Platforms",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "High-performance platforms supporting product lifecycles and secure payment processing.",
      stats: "Cloud-Ready",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500",
      route: "/ecommerceplatforms"
    }, 
  ];

//   const Schoolbagpage = () =>{
//     navigate("/schoolbag")

//   }

    return(
        <div>
              <div><br />

               <section className="relative h-[60vh] flex items-center justify-center bg-[#3DA097]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://img.freepik.com/free-photo/happy-male-entrepreneur-using-desktop-pc-while-working-office-there-are-people-background_637285-1037.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Api Team" 
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
            Our Services
          </motion.h1>
        
        </div>
      </section><br />
             
           
           
        
               <div className="flex flex-wrap gap-4 justify-center ">
                    {casestudies_projects.map((project, idx) => (
                        <div key={idx} onClick={() => project.route && navigate(project.route)} className="border border-gray-500 p-2 rounded-xl bg-gray-100 ">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-64 object-cover rounded-xl"
                        />
                         <div className="flex items-center justify-between mt-4 justify-center">
                            <div className="flex items-center gap-2">
                                {project.icon}
                                <h3 className="font-bold">{project.title}</h3>
                                <ArrowUpRight size={20} className="text-gray-400" />
                            </div>
                            
                        </div><br/>
                        <div class="">

                            <p class="text-gray-700 bg-black text-white p-4 rounded-md w-100  break-words ">
                                {project.desc}
                                </p>
                            </div>
                        
                      
                        
       

                        </div>
                    ))}
                </div><br />


          

    
            
            
            
          </div>
            
        </div>
    )
}

export default CaseStudies;