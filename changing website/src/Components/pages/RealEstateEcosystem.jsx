import React from "react";
import { motion } from 'framer-motion';

function RealEstateEcosystem(){
    return(
         <div>
              <section className="relative h-[60vh] flex items-center justify-center bg-[#030712]">
                    <div className="absolute inset-0 opacity-40">
                    <img 
                        src="https://img.freepik.com/free-photo/happy-male-entrepreneur-using-desktop-pc-while-working-office-there-are-people-background_637285-1037.jpg?semt=ais_hybrid&w=740&q=80" 
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
                        Real Estate Ecosystem
                    </motion.h1>
                   
                    </div>
                </section>
                <div className="px-15 py-6">
                    <p className="text-lg">We develop secure, scalable, and performance-driven real estate web and mobile applications tailored for developers, brokers, 
                        channel partners, and property management teams. Our solutions enable seamless management of listings, leads, site visits, bookings, commissions, and customer communication through a single integrated platform.
                         </p><br/>
                    <p className="text-lg">Our real estate technology solutions are built using modern architectures and industry best practices, ensuring high availability,
                         data security, and seamless integration with CRM, ERP, and third-party systems. From concept and prototyping to deployment and ongoing support, API Technologies acts as a long-term technology partner for real estate organizations.
                    </p>

                </div><br/>
                
                    <div className="flex flex-wrap justify-center gap-30">
                        <img src="images/image8.jpg" className="w-full sm:w-110 sm:h-80 rounded-lg object-cover" />
                        <img src="images/image9.jpg" className="w-full sm:w-150 sm:h-80  rounded-lg object-cover" />
                    </div><br/>
                    <div className="flex flex-wrap justify-center gap-40">
                        <img src="images/image11.jpg" className="w-full sm:w-170 sm:h-80 rounded-lg object-cover" />
                        
                    </div><br />


                

        </div>
       
    )
}

export default RealEstateEcosystem;