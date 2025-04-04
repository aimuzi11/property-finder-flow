
import { motion } from "framer-motion";
import { MessageSquare, Search, Star, Users } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-realestate-blue" />,
    title: "Conversational Interface",
    description: "Our AI chatbot guides you with natural conversation to understand your needs"
  },
  {
    icon: <Search className="w-6 h-6 text-realestate-blue" />,
    title: "Smart Property Matching",
    description: "Advanced algorithms match your requirements with available properties"
  },
  {
    icon: <Users className="w-6 h-6 text-realestate-blue" />,
    title: "Direct Agent Connection",
    description: "Get connected with specialized agents based on your property interests"
  },
  {
    icon: <Star className="w-6 h-6 text-realestate-blue" />,
    title: "Exclusive Inventory",
    description: "Access to properties not listed on public platforms through our sponsors"
  }
];

const AboutChatbot = () => {
  return (
    <div id="about" className="section-container bg-realestate-lightblue">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your AI Property Assistant</h2>
          <p className="text-lg text-realestate-charcoal mb-6">
            Our smart chatbot is designed to quickly match you with the perfect property in UAE,
            powered by real-time data and artificial intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="mr-3 bg-realestate-lightblue p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-realestate-navy">{feature.title}</h3>
                </div>
                <p className="text-sm text-realestate-charcoal ml-12">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-realestate-navy flex items-center justify-center text-white">
                  <MessageSquare size={18} />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Property Assistant</h3>
                  <p className="text-xs text-gray-500">Online now</p>
                </div>
              </div>
              <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Live Demo</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4 h-64 overflow-y-auto">
              <div className="flex flex-col space-y-3">
                <div className="bg-realestate-blue text-white p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                  <p className="text-sm">Hi there! I'm your property assistant. I can help you find the perfect property in UAE. Are you looking for ready properties, off-plan, or rentals?</p>
                </div>
                
                <div className="bg-gray-200 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                  <p className="text-sm">I'm interested in ready properties.</p>
                </div>
                
                <div className="bg-realestate-blue text-white p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                  <p className="text-sm">Great! What type of property are you looking for? (Apartment, Villa, Townhouse, etc.)</p>
                </div>
                
                <div className="bg-gray-200 p-3 rounded-lg rounded-tr-none max-w-[80%] self-end">
                  <p className="text-sm">I'm looking for an apartment.</p>
                </div>
                
                <div className="bg-realestate-blue text-white p-3 rounded-lg rounded-tl-none max-w-[80%] self-start">
                  <p className="text-sm">Perfect! I'll show you some great apartments available right now.</p>
                  <p className="text-xs mt-2 text-blue-100">typing...</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-realestate-blue focus:border-transparent"
                placeholder="Type your property requirements..."
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-realestate-navy text-white px-4 py-1 rounded-md">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutChatbot;
