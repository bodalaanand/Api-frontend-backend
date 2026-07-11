import React from "react";
import { motion } from 'framer-motion';

function ElectionSurvey(){
    return(
        <div>
              <section className="relative h-[60vh] flex items-center justify-center bg-[#1B3F3B]">
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
                        Election Survey
                    </motion.h1>
                   
                    </div>
                </section>
                <div className="px-15 py-6">
                    <p className="text-lg">API Technologies developed a secure and scalable Election Survey Application for structured field data collection 
                        and real-time analytics. The solution enables efficient survey management, centralized reporting, and data-driven insights through a user-friendly web and mobile platform.
                    </p><br/>
                   

                </div><br/>
                
                    <div className="flex flex-wrap justify-center gap-30">
                        <img src="ElectionServeyImages/image1.webp" className="w-full sm:w-110 sm:h-80 rounded-lg object-cover" />
                        <img src="ElectionServeyImages/image2.jpg" className="w-full sm:w-150 sm:h-80  rounded-lg object-cover" />
                    </div><br/>
                    <div className="flex flex-wrap justify-center gap-40">
                        <img src="ElectionServeyImages/image3.jpg" className="w-full sm:w-170 sm:h-80 rounded-lg object-cover" />
                        
                    </div><br />


                

        </div>
        
    )
}

export default ElectionSurvey;