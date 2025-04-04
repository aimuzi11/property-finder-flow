import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-realestate-navy text-xl font-bold">Proper</span>
            <span className="text-realestate-gold font-bold">AI</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#how-it-works" className="text-realestate-charcoal hover:text-realestate-blue transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-realestate-charcoal hover:text-realestate-blue transition-colors">
                About
              </a>
              <a href="#sponsors" className="text-realestate-charcoal hover:text-realestate-blue transition-colors">
                Sponsors
              </a>
              <a href="#testimonials" className="text-realestate-charcoal hover:text-realestate-blue transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-realestate-charcoal hover:text-realestate-blue transition-colors">
                Contact
              </a>
              <Button className="bg-realestate-navy hover:bg-realestate-blue text-white">
                Start Chat
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-realestate-navy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-realestate-charcoal hover:text-realestate-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-realestate-charcoal hover:text-realestate-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#sponsors" 
              className="block px-3 py-2 text-realestate-charcoal hover:text-realestate-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-realestate-charcoal hover:text-realestate-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-realestate-charcoal hover:text-realestate-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button 
                className="w-full bg-realestate-navy hover:bg-realestate-blue text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
