import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const EventsGallery = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 'stack-hackathon-2026',
      title: "KOYYANA RENUKA",
      subtitle: "Celebrate Dreams & New Beginnings",
      date: "July 17",
      location: "Vizag",
      image: "images/Renu 29.jpeg", // Representative AI/Tech image
      regClose: "End of the Day"
    }
    // Add future events here
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Celebration of the Day</h2>
          <p className="text-gray-600 mt-4">Join us in shaping the future of technology and entrepreneurship.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/events/${event.id}`)}
              className="cursor-pointer group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100"
            >
              {/* Landscape Poster Side */}
              <div className="lg:w-2/3 relative overflow-hidden h-64 lg:h-auto">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center p-12 text-white">
                  <span className="bg-blue-600 w-fit px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">Today Celebrations</span>
                  <h3 className="text-3xl md:text-5xl font-black mb-2">{event.title}</h3>
                  <p className="text-xl text-blue-300 font-medium italic">"{event.subtitle}"</p>
                </div>
              </div>

              {/* Quick Info Side */}
              <div className="lg:w-1/3 p-10 flex flex-col justify-center bg-white">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-gray-600">
                    <Calendar className="text-blue-600" size={20} />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <MapPin className="text-blue-600" size={20} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-red-500 font-bold text-sm">
                    <Clock size={18} />
                    <span>{event.regClose}</span>
                  </div>
                </div>
                
                {/* <button className="w-full bg-[#0b0e36] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-950 transition-colors">
                  Learn More & Apply <ArrowRight size={18} />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;