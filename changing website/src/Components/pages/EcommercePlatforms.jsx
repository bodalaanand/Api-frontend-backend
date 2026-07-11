import React from "react";
import { motion } from 'framer-motion';


function EcommercePlatforms(){
    return(
        <div>
              <section className="relative h-[60vh] flex items-center justify-center bg-[#030712]">
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
                        E-commerce Platforms
                    </motion.h1>
                   
                    </div>
                </section>
                <div className="px-15 py-6">
                    <p className="text-lg">API Technologies provides enterprise-class e-commerce application development solutions designed to support secure, scalable, and high-performance digital commerce operations. 
                        We have successfully delivered e-commerce platforms for clients in the fashion and defence sectors, addressing industry-specific requirements and compliance standards.
      </p><br/>
                    <p className="text-lg">Our e-commerce solutions are engineered to support end-to-end commerce capabilities, 
                        including product lifecycle management, secure payment processing, inventory and order management, and integrated analytics. Built on modern, cloud-ready architectures, our platforms ensure reliability, performance optimization, and seamless user experiences across web and mobile channels.</p>
                    <p className="text-lg">
                        With a structured delivery approach and strong governance frameworks, API Technologies partners with organizations throughout the digital
                         commerce lifecycle-from strategic planning and application development to deployment, optimization, and long-term support.

                    </p>
                </div><br/>
                
                    <div className="flex flex-wrap justify-center gap-30">
                        <img src="EommercePlatformImages/image1.webp" className="w-full sm:w-350 sm:h-100  object-cover" />
                        {/* <img src="EommercePlatformImages/image2.jpg" className="w-full sm:w-150 sm:h-80  rounded-lg object-cover" /> */}
                    </div><br/>
                    {/* <div className="flex flex-wrap justify-center gap-40">
                        <img src="EommercePlatformImages/image3.jpg" className="w-full sm:w-170 sm:h-80 rounded-lg object-cover" />
                        
                    </div><br /> */}


                

        </div>
       
    )
}

export default EcommercePlatforms;