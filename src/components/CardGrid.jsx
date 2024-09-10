import React from 'react';
import './CardGrid.css'; // Add your custom styles here

const CardGrid = () => {
  const courses = [
    { title: 'মেডিকেল কোর্স', price: '৳500', enrollLink: '#' },
    { title: 'ইঞ্জিনিয়ারিং কোর্স', price: '৳400', enrollLink: '#' },
    // Add other course details
  ];

  return (
    <section className="card-grid">
      <div className="container">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <h3>{course.title}</h3>
            <p>{course.price}</p>
            <button onClick={() => window.location.href = course.enrollLink}>Enroll</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
