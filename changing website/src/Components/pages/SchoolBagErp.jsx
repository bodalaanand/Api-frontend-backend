import React from "react";
import { motion } from 'framer-motion';
// import {ArrowUpRight } from 'lucide-react';

function SchoolBag(){
    return(
        <div>
              <section className="relative h-[60vh] flex items-center justify-center bg-[#1B3F3B]">
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
                        School Bag Application
                    </motion.h1>
                   
                    </div>
                </section>
                <div className="px-15 py-6">
                    <p className="text-lg">One of Our key sucess stories is the School Bag Application, a Comprehensive education ERP solution designed,
                      developed and successfully managed by API Technologies. The platform provides provides end-to-end digital enablement for
                     acadamic and administrative operations, including application development, deployment, and onging technical support.
                    </p><br/>
                    <p className="text-lg">Currently, the School Bag ERP is activley used by 10+schools, supporting core functions such as student management, academic process, 
                       communication and operational workflows.The solution has been implemented with foucs on a scalability, reliability and ease of use ebabling 
                       institutions to improve efficiency and adopt a digital-first approach.
                    </p>

                </div><br/>
                
                    <div className="flex flex-wrap justify-center gap-30">
                        <img src="images/image1.jpg" className="w-full sm:w-110 sm:h-80 rounded-lg object-cover" />
                        <img src="images/image6.jpg" className="w-full sm:w-150 sm:h-80  rounded-lg object-cover" />
                    </div><br/>
                    <div className="flex flex-wrap justify-center gap-40">
                        <img src="images/image2.jpg" className="w-full sm:w-170 sm:h-80 rounded-lg object-cover" />
                        
                    </div><br />


                

        </div>
    )
}

export default SchoolBag;


