import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-purple-100 py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          মেডিকেল ৫০% ছাড়ে অনলাইন কোর্স
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          সকল বিজ্ঞান শাখার ছাত্র, ছাত্রী, ও অভিভাবকদের জন্য বিশেষ সুযোগ।
        </p>
        <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300">
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
