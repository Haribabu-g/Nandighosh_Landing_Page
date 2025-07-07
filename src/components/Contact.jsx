const Contact = () => {
  return (
    <section id="whatsapp" className="bg-zinc-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

const WhatsAppCTA = () => {
  return (
    <section id="whatsapp" className="bg-green-100 py-12 text-center px-4">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Have a question?</h2>
      <p className="text-green-700 mb-6">Chat with us instantly on WhatsApp</p>
      <a
        href="https://wa.me/918000000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Message Us on WhatsApp
      </a>
    </section>
  );
};

export default Contact;
export { WhatsAppCTA };