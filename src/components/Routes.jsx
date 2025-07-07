import { motion } from 'framer-motion';

const routes = [
  { from: "Balasore", to: "Sambalpur", image: "/assets/Sambalpur.png" },
  { from: "Balasore", to: "Jamshedpur", image: "/assets/Jamshedpur.png" },
  { from: "Balasore", to: "Berhampur" , image: "/assets/Berhampur.png"},
];

const RouteCard = ({ from, to, delay, image }) => (
  <motion.div
    className="shadow-md rounded-lg p-6 text-center font-bold hover:scale-125 transition duration-300 relative overflow-hidden"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "#fff",
    }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <div className="bg-black/70 inline-block px-4 py-2 rounded-full text-sm md:text-base">
      {from} ➔ {to}
    </div>
  </motion.div>
);

const Routes = () => {
  return (
    <section id="routes" className="py-16 px-4 bg-neutral-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Popular Bus Routes</h2>
      <div className="  grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {routes.map((route, index) => (
          <RouteCard
            key={`${route.from}-${route.to}`}
            from={route.from}
            to={route.to}
            delay={index * 0.3}
            image={route.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Routes;