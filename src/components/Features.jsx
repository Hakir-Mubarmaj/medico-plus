import React from 'react';
 // Add your custom styles here

const Features = () => {
  const features = [
    { icon: '📚', title: 'অনলাইন লাইব্রেরী', description: 'দ্রুত পাঠ্যক্রম এবং রিসোর্স এক্সেস।' },
    { icon: '🧑‍🏫', title: 'সেরা শিক্ষক', description: 'দেশের সেরা শিক্ষকদের দ্বারা পাঠদান।' },
    { icon: '💻', title: 'ই-লার্নিং পোর্টাল', description: 'শেখার জন্য আধুনিক প্ল্যাটফর্ম।' },
    { icon: '📝', title: 'নোটস এবং টেস্ট', description: 'সহজ এবং উপযোগী নোটস ও পরীক্ষাসমূহ।' },
    // Add more features if needed
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>আমাদের সেবা</h2>
        <div className="feature-list">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
