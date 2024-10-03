// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Exam = () => {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [answers, setAnswers] = useState([]);

  // Fetch available exams from the backend
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/questions')
      .then((response) => {
        setExams(response.data);
      })
      .catch((error) => {
        console.error('Error fetching exams:', error);
      });
  }, []);

  // Handle exam selection
  const handleExamSelect = (exam) => {
    axios.get(`http://127.0.0.1:5000/questions/${exam.id}`)
      .then((response) => {
        setSelectedExam(response.data);
        const initialAnswers = Array(response.data.answer_sequence.length).fill(null);
        setAnswers(initialAnswers); // Initialize empty answers
      })
      .catch((error) => {
        console.error('Error fetching exam:', error);
      });
  };

  // Handle answer selection
  const handleAnswerSelect = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  // Submit the answers
  const handleSubmit = () => {
    const correctAnswers = selectedExam.answer_sequence.split('');
    let score = 0;

    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score++;
      }
    });

    alert(`You scored ${score} out of ${correctAnswers.length}`);
  };

  return (
    <div className="p-4">
      {!selectedExam ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
              onClick={() => handleExamSelect(exam)}
            >
              <h2 className="text-lg font-bold">{exam.title}</h2>
              <p className="mt-2">Click to start exam</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex">
          {/* PDF Viewer */}
          <div className="w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-4">{selectedExam.title}</h2>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js`}>
              <div className="h-screen">
                <Viewer fileUrl={`/uploads/${selectedExam.pdf_filename}`} />
              </div>
            </Worker>
          </div>

          {/* Answer Sheet */}
          <div className="w-1/3 p-4 bg-gray-100">
            <h3 className="text-xl font-bold mb-4">Answer Sheet</h3>
            {selectedExam.answer_sequence.split('').map((_, index) => (
              <div key={index} className="mb-4">
                <p>Question {index + 1}</p>
                <div className="flex space-x-4">
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        onChange={() => handleAnswerSelect(index, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              onClick={handleSubmit}
            >
              Submit Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exam;
