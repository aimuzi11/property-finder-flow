
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Choose Property Status",
    description: "Select if you're looking for Ready, Off-plan, or Rental properties",
    icon: "📋",
  },
  {
    number: 2,
    title: "Specify Property Type",
    description: "Tell us if you want an Apartment, Villa, Townhouse, etc.",
    icon: "🏠",
  },
  {
    number: 3,
    title: "Get Real-Time Options",
    description: "View property options from our trusted sponsors",
    icon: "🔍",
  },
  {
    number: 4,
    title: "Connect With Agents",
    description: "Select your favorite and share your contact details",
    icon: "📱",
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="section-container bg-white">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">
        Finding your ideal property in UAE is simple with our chatbot assistant
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-realestate-lightblue rounded-full mb-4 mx-auto">
              <span className="text-3xl">{step.icon}</span>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-7 h-7 bg-realestate-navy text-white rounded-full text-sm font-medium mb-2">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-realestate-charcoal text-sm">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Process line for desktop */}
      <div className="hidden lg:block relative mt-16">
        <div className="absolute h-1 bg-realestate-lightblue left-0 right-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="absolute h-1 bg-realestate-blue left-0 right-0 top-1/2 transform -translate-y-1/2" style={{ width: '100%', animation: 'progress 3s ease-in-out infinite' }}></div>
      </div>
    </div>
  );
};

export default HowItWorks;
