const MobileAppBanner = () => {
  return (
    <section className="bg-white text-black py-8 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-2">
          Download Our Nandighosh Bus Booking Mobile App
        </h3>
        <p className="mb-4">Soon available on the App Store & Google Play</p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {/* App Store */}
          <div
            className="w-32 h-12 bg-cover bg-center bg-no-repeat rounded-lg flex items-center justify-center text-sm font-medium text-white transition-transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: "url('/assets/playstore.png')" }}
          >
          </div>

          {/* Google Play */}
          <div
            className="w-32 h-12 bg-cover bg-center bg-no-repeat rounded-lg flex items-center justify-center text-sm font-medium text-white transition-transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: "url('/assets/istore.png')" }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;