
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToChatbot = () => {
    document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16 bg-gradient-to-b from-white to-realestate-lightblue">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find Your Perfect Property 
            <span className="text-realestate-blue block">Ready, Off-Plan, or For Rent</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-realestate-charcoal mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Instant recommendations tailored to your needs in the UAE real estate market.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              className="bg-realestate-navy hover:bg-realestate-blue text-white text-lg px-8 py-6"
              onClick={scrollToChatbot}
            >
              Start Chat
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Luxury Dubai Real Estate" 
              className="w-full h-[350px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-realestate-gold px-2 py-1 rounded text-xs font-semibold">FEATURED</span>
                <span className="bg-realestate-blue px-2 py-1 rounded text-xs font-semibold">PREMIUM</span>
              </div>
              <h3 className="text-xl font-bold text-white">Luxury Properties in Prime Locations</h3>
              <p className="text-sm text-white/80">Exclusive deals from our trusted partners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
