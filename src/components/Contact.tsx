
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="section-container bg-white">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have questions about our property finder service? We're here to help.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.div 
          className="bg-realestate-lightblue p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-realestate-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-realestate-charcoal mb-4">Our agents are available 24/7</p>
          <a 
            href="tel:+9715000000" 
            className="text-realestate-blue hover:text-realestate-navy font-medium transition-colors"
          >
            +971 50 000 0000
          </a>
        </motion.div>
        
        <motion.div 
          className="bg-realestate-lightblue p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-realestate-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <p className="text-realestate-charcoal mb-4">Send us your inquiries</p>
          <a 
            href="mailto:info@propertyfinder.ae" 
            className="text-realestate-blue hover:text-realestate-navy font-medium transition-colors"
          >
            info@propertyfinder.ae
          </a>
        </motion.div>
        
        <motion.div 
          className="bg-realestate-lightblue p-6 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-realestate-navy rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
          <p className="text-realestate-charcoal mb-4">Chat with us directly</p>
          <a 
            href="https://wa.me/9715000000" 
            className="text-realestate-blue hover:text-realestate-navy font-medium transition-colors"
          >
            +971 50 000 0000
          </a>
        </motion.div>
      </div>
      
      <div className="mt-16 bg-realestate-navy text-white p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to find your perfect property?</h3>
          <p className="mb-6">
            Our AI chatbot can help you find exactly what you're looking for in minutes.
          </p>
          <Button 
            className="bg-white hover:bg-realestate-gold text-realestate-navy px-8 py-6 text-lg"
            onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Chatting Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
