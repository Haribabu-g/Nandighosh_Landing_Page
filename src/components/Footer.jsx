const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center space-x-3">
          <img  src="/assets/navbar_logo.png" alt="Nandighosh Bus" className="bg-white w-12 h-12 rounded" />
          <span className="text-xl font-bold font-bebas">NANDIGHOSH Bus</span>
        </div>

      
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#routes" className="hover:text-white transition">Routes</a>
          <a href="#why-us" className="hover:text-white transition">About Us</a>
          <a href="#whatsapp" className="hover:text-white transition">Contact</a>
        </div>
      </div>

      
      <div className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Nandighosh Bus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;