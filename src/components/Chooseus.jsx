import { motion } from "framer-motion";

const features = [
  {
    title: "AC Sleeper Coaches",
    image: "/assets/ac.png",
  },
  {
    title: "Online Ticketing",
    image: "/assets/onlineticket.png",
  },
  {
    title: "Timely Departures",
    image: "/assets/timely.png",
  },
  {
    title: "Clean Toilets",
    image: "/assets/toilet.png",
  },
  { title: "Live Bus Tracking", 
    image: "/assets/tracking.png" },

  { title: "24/7 Customer Support",
     image: "/assets/cuscare.png" },

  { title: "Affordable Fares", 
    image: "/assets/cheap.png" },

  { title: "Experienced Drivers", 
    image: "/assets/busdriver.png" },
];

const Chooseus = () => {
  return (
    <section id="why-us" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        Why Choose Nandighosh
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="relative rounded-xl overflow-hidden h-72 shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Chooseus;
