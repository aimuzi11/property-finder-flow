
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutChatbot from "@/components/AboutChatbot";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Create and append Zapier script
    const script = document.createElement('script');
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.type = 'module';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AboutChatbot />
      <Testimonials />
      
      {/* Zapier Chatbot Section */}
      <div id="chatbot" className="section-container">
        <h2 className="section-title">Property Finder Assistant</h2>
        <p className="section-subtitle">
          Our AI chatbot will help you find the perfect property in minutes
        </p>
        <div className="max-w-3xl mx-auto mt-8 flex justify-center">
          <zapier-interfaces-chatbot-embed 
            is-popup="false" 
            chatbot-id="cm8iumwau000912i2wd4m8r34" 
            height="600px" 
            width="400px">
          </zapier-interfaces-chatbot-embed>
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
