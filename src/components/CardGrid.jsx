import React from 'react';

const CardGrid = () => {
  const cards = [
    { title: 'মেডিকেল কোর্স', price: '1500' },
    { title: 'ইঞ্জিনিয়ারিং কোর্স', price: '1400' },
    // Add more cards as needed
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <p className="text-gray-700 mb-6">{card.price}</p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
