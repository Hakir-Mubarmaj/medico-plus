import React from 'react';
import './SuccessStories.css'; // Add your custom styles here

const SuccessStories = () => {
  const stories = [
    { name: 'মোহাম্মদ রায়হান', university: 'BUET', quote: 'আমি Udvash এর সাহায্যে আমার স্বপ্ন পূরণ করেছি।' },
    { name: 'মাহমুদ হাসান', university: 'BUTEX', quote: 'সেরা শিক্ষকদের জন্য Udvash আমার প্রথম পছন্দ।' },
    { name: 'শারমিন আক্তার', university: 'DU', quote: 'উদ্ভাসের মাধ্যমে আমি আমার লক্ষ্যে পৌঁছেছি।' },
    // Add more stories if needed
  ];

  return (
    <section className="success-stories">
      <div className="container">
        <h2>সফল ছাত্রছাত্রীদের গল্প</h2>
        <div className="stories">
          {stories.map((story, index) => (
            <div className="story-card" key={index}>
              <h3>{story.name}</h3>
              <p>{story.university}</p>
              <blockquote>{story.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
