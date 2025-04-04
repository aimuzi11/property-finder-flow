
import { motion } from "framer-motion";

const sponsorLogos = [
  { name: "Emaar Properties", logo: "https://logowik.com/content/uploads/images/608_emaar.jpg" },
  { name: "Damac Properties", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquMArT5A8u3zKwvb5cqOHMRXIoaHu3l74SA&usqp=CAU" },
  { name: "Nakheel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXw2i6OsZY3Hf8N6m2-wXZlf0_uQJM01Kg4PjQ_fiqTlEtQ_M_kgBLPQj3v_qP0p2MdgU&usqp=CAU" },
  { name: "Aldar Properties", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr9QLJH9X9y-zyE7xL6RdJ96DMxmYkc6KPg&usqp=CAU" },
  { name: "Meraas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWeCZJMjCvVL6BZwhOhB66JFR4hGZcP97Ug&usqp=CAU" },
  { name: "Dubai Properties", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsw72hD9vQiJm24xYs3J1nwOEUYLf1yQPbA&usqp=CAU" },
];

const Sponsors = () => {
  return (
    <div id="sponsors" className="section-container bg-white">
      <h2 className="section-title">Our Trusted Sponsors</h2>
      <p className="section-subtitle">
        We partner with the leading property developers and agencies in UAE to bring you exclusive listings
      </p>
      
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {sponsorLogos.map((sponsor, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-24 w-full flex items-center justify-center hover:shadow-md transition-shadow">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <p className="mt-3 text-sm text-realestate-charcoal text-center">{sponsor.name}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 bg-realestate-lightblue rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-3">Access Exclusive Inventory</h3>
        <p className="text-realestate-charcoal mb-6 max-w-3xl mx-auto">
          Our sponsors provide us with real-time inventory data, including off-market properties and special deals not available on public platforms.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-white px-4 py-2 rounded-full text-sm text-realestate-navy font-medium">
            Premium Waterfront Villas
          </div>
          <div className="bg-white px-4 py-2 rounded-full text-sm text-realestate-navy font-medium">
            Luxury High-Rise Apartments
          </div>
          <div className="bg-white px-4 py-2 rounded-full text-sm text-realestate-navy font-medium">
            Exclusive Off-Plan Projects
          </div>
          <div className="bg-white px-4 py-2 rounded-full text-sm text-realestate-navy font-medium">
            Investment Opportunities
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
