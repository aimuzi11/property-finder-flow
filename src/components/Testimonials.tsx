
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    location: "Dubai",
    text: "I found my perfect apartment in Dubai Marina in just 5 minutes using the chatbot. The process was so smooth, and I got connected with an agent immediately.",
    rating: 5,
  },
  {
    name: "Mohammed A.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Abu Dhabi",
    text: "As an investor, I needed to find off-plan properties with good ROI. The chatbot matched me with exactly what I was looking for and saved me hours of research.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    location: "Sharjah",
    text: "We were relocating to UAE and needed to find a villa for rent quickly. The chatbot showed us options we hadn't seen on other platforms! Very impressed.",
    rating: 4,
  },
  {
    name: "Rajiv P.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    location: "Dubai",
    text: "The property assistant helped me narrow down my search for a townhouse. The agent they connected me with was knowledgeable and professional.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-realestate-charcoal italic">"{testimonial.text}"</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3; // Number of testimonials to display at once

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate visible testimonials based on screen size
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + displayCount
  );

  return (
    <div id="testimonials" className="section-container bg-realestate-lightblue">
      <h2 className="section-title">What Our Users Say</h2>
      <p className="section-subtitle">
        Don't just take our word for it - hear from people who found their perfect property
      </p>

      <div className="relative mt-12">
        <div className="flex flex-col md:flex-row gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={prevTestimonial}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${
              currentIndex === 0
                ? "bg-gray-200 text-gray-400"
                : "bg-realestate-navy text-white"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            disabled={currentIndex >= testimonials.length - displayCount}
            className={`p-2 rounded-full ${
              currentIndex >= testimonials.length - displayCount
                ? "bg-gray-200 text-gray-400"
                : "bg-realestate-navy text-white"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
