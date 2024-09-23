// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'; // Use react-icons for icons
import Footer from '../components/Footer';
import DBContent from '../components/DashboardComponent';
import Exam from '../components/Exam';
import Sheet from '../components/sheet';
import Video from '../components/Video';

const Dashboard = () => {
  // State to manage the visibility of the drawer and the selected content
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle menu selection
  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    setIsDrawerOpen(false); // Close drawer after selection (for smaller screens)
  };

  // Conditional rendering for different menu content
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Dashboard':
        return <div><DBContent/></div>;
      case 'Exam':
        return <div><Exam/></div>;
      case 'Class Record':
        return <div><Video/></div>;
      case 'Lecture Sheet':
            return <div><Sheet/></div>;
      // Add more cases for other menu items as needed
      default:
        return <div><DBContent/></div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Drawer */}
      <div className={`fixed z-50 inset-0 transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 w-64 bg-gray-900 text-white`}>
        <div className="flex items-center justify-start p-4 mb-6">
          <img src="https://i.ibb.co/L82TVpF/logo-removebg-preview.png" alt="Logo" className="w-full h-12 mr-3" /> {/* Left-align image icon */}
        </div>

        <nav className="space-y-2">
          <ul>
            <li>
              <button
                onClick={() => handleMenuSelect('Dashboard')}
                className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${selectedMenu === 'Dashboard' ? 'bg-purple-700 text-white' : 'text-gray-300'}`}
              >
                <i className="fas fa-tachometer-alt mr-3"></i> {/* Icon */}
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuSelect('Exam')}
                className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${selectedMenu === 'Exam' ? 'bg-purple-700 text-white' : 'text-gray-300'}`}
              >
                <i className="fas fa-file-alt mr-3"></i> {/* Icon */}
                Exam
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuSelect('Class Record')}
                className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${selectedMenu === 'Class Record' ? 'bg-purple-700 text-white' : 'text-gray-300'}`}
              >
                <i className="fas fa-video mr-3"></i> {/* Icon */}
                Class Record
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuSelect('Lecture Sheet')}
                className={`flex items-center p-2 w-full text-left hover:bg-gray-700 rounded ${selectedMenu === 'Lecture Sheet' ? 'bg-purple-700 text-white' : 'text-gray-300'}`}
              >
                <i className="fas fa-book-open mr-3"></i> {/* Icon */}
                Lecture Sheet
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-purple-600 text-white p-4 shadow">
          <button className="text-white md:hidden" onClick={toggleDrawer}>
          <i className="fas fa-bars"></i>
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-white"><i className="fas fa-bell"></i></button>
            <button className="text-white"><i className="fas fa-user-circle"></i></button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gray-100 overflow-auto">
          {renderContent()}
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
