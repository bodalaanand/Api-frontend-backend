import React from "react";
import {  GraduationCap, Building2, Vote, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function MyMoments(){

    const navigate = useNavigate()

    const casestudies_projects = [
    {
      title: "Happy Birthday 🎉",  
      category: "Education Technology",
      tag: "Flagship Solution",
      icon: <GraduationCap size={24} />,
      desc: "May your special day be filled with endless joy, laughter, and unforgettable memories. Wishing you happiness today and always.",
      // stats: "10+ Institutions",
      img: "images/Renu 7.jpeg",
      route: "/schoolbag"
    },
    {
      title: "Memorable Moments 📸",
      category: "Property Management",
      tag: "Enterprise Grade",
      icon: <GraduationCap size={24} />,
      desc: "Fill your heart with laughter, your life with love, and your year ahead with endless.",
      stats: "End-to-End CRM",
      img: "images/Renu 28.jpeg",
      route: "/realestate"
    },
    {
      title: "Birthday Koyyana 👑",
      category: "Data Analytics",
      tag: "Secure & Scalable",
      icon: <GraduationCap size={24} />,
      desc: "your future shine with endless success.",
      stats: "Real-time Insights",
      img: "images/Renu 22.jpeg",
      route: "/electionsurvey"
    
    },
    {
      title: "Balloons & Happy Moments",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "Colorful balloons, laughter, music, and cheerful decorations create the perfect atmosphere for an unforgettable birthday celebration.",
      stats: "Cloud-Ready",
      img: "images/Renu-1.jpeg",
      route: "/ecommerceplatforms"
    },
    {
      title: "Forever Memories 📸 ",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "Capture every smile and joyful moment in photos that can be treasured for years to come.",
      stats: "Cloud-Ready",
      img: "images/Renu 5.jpeg",
      route: "/ecommerceplatforms"
    },
    {
      title: "Magical Birthday Memories",
      category: "Digital Commerce",
      tag: "Fashion & Defence",
      icon: <ShoppingBag size={24} />,
      desc: "Every Smile Every Wish Every Moment Matters.",
      stats: "Cloud-Ready",
      img: "images/Renu 2.jpeg",
      route: "/ecommerceplatforms"
    }, 
  ];

//   const Schoolbagpage = () =>{
//     navigate("/schoolbag")

//   }

    return(
        <div>
              <div><br />

               <section className="py-20 bg-[#0a0d14] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="images/Renu 28.jpeg"
            alt="Api Team" 
            className="w-full h-full object-cover grayscale"
          />
          {/* <img 
            src="https://img.freepik.com/free-photo/happy-male-entrepreneur-using-desktop-pc-while-working-office-there-are-people-background_637285-1037.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Api Team" 
            className="w-full h-full object-cover grayscale"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a237e]/60 to-[#0a0d14]" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4"
          >
            My Moments
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

export default MyMoments;