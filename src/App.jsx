import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        {/* Your main content goes here */}
        <h1>Welcome to Penpaper</h1>
        <p>Your Facebook clone site built with React and Vite!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;