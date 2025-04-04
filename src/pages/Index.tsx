
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutChatbot from "@/components/AboutChatbot";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PropertyChatbot from "@/components/PropertyChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AboutChatbot />
      <Sponsors />
      <Testimonials />
      <PropertyChatbot />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
