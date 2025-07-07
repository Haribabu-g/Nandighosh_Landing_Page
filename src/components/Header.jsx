import { motion } from 'framer-motion';

const Header = () => {
  return (
    <section id="home" className="relative pt-[5rem] h-[90vh] bg-cover bg-center bg-gray-50  bg-no-repeat " >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black text-center px-4">
       
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <img src="/assets/navbar_logo.png" alt="Nandighosh Bus" className="w-50 h-50 mb-4" />
        </motion.div>

        
        <motion.h1
          className=" text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Connecting Odisha, Comfortably
        </motion.h1>

       
        <motion.a
          href="#whatsapp"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          initial={{ opacity: 0, y: 20 }}
         
            animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Book Your Seat
        </motion.a>
      </div>
    </section>
  );
};

export default Header;