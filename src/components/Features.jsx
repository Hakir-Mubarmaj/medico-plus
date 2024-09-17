// eslint-disable-next-line no-unused-vars
import React from 'react';

const Features = () => {
  const features = [
    { icon: '📚', title: 'অনলাইন লাইব্রেরী', description: 'দ্রুত পাঠ্যক্রম এবং রিসোর্স এক্সেস।' },
    { icon: '🧑‍🏫', title: 'সেরা শিক্ষক', description: 'দেশের সেরা শিক্ষকদের দ্বারা পাঠদান।' },
    { icon: '💻', title: 'ই-লার্নিং পোর্টাল', description: 'শেখার জন্য আধুনিক প্ল্যাটফর্ম।' },
    { icon: '📝', title: 'নোটস এবং টেস্ট', description: 'সহজ এবং উপযোগী নোটস ও পরীক্ষাসমূহ।' },
    { icon: '📚', title: 'অনলাইন লাইব্রেরী', description: 'দ্রুত পাঠ্যক্রম এবং রিসোর্স এক্সেস।' },
    { icon: '🧑‍🏫', title: 'সেরা শিক্ষক', description: 'দেশের সেরা শিক্ষকদের দ্বারা পাঠদান।' },
    { icon: '💻', title: 'ই-লার্নিং পোর্টাল', description: 'শেখার জন্য আধুনিক প্ল্যাটফর্ম।' },
    { icon: '📝', title: 'নোটস এবং টেস্ট', description: 'সহজ এবং উপযোগী নোটস ও পরীক্ষাসমূহ।' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="text-teal-800 text-center text-4xl font-bold mb-8">আমাদের সেবা</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center" 
              key={index}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
