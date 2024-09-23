// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
 // Using react-icons for the menu icon


const DashboardLayout = () => {
    const [activeMenu, setActiveMenu] = useState('live-class');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const renderContent = () => {
        switch (activeMenu) {
            case 'live-class':
              return <div>live-class</div>;
            case 'live-exam':
              return <div>live-exam</div>;
            case 'practice-exam':
              return <div>practice-exam</div>;
            case 'qa-service':
              return <div>qa-service</div>;
            default:
              return <div>Dashboard Content</div>;
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`w-64 ${drawerOpen ? 'block' : 'hidden'} lg:block bg-gray-100 h-screen`}>
                <div className="p-4 border-b">
                    <button onClick={() => setDrawerOpen(false)}>Close</button>
                </div>
                <ul>
                    <li onClick={() => setActiveMenu('live-class')}>Live Class</li>
                    <li onClick={() => setActiveMenu('live-exam')}>Live Exam</li>
                    <li onClick={() => setActiveMenu('practice-exam')}>Practice Exam</li>
                    <li onClick={() => setActiveMenu('qa-service')}>Q&A Service</li>
                </ul>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
                {/* Top Bar */}
                <div className="flex items-center justify-between bg-white p-4 border-b">
                    <button onClick={() => setDrawerOpen(!drawerOpen)} className="lg:hidden">
                        abc
                    </button>
                    <div className="flex items-center">
                        {/* Add icons for notifications, profile, etc. */}
                    </div>
                </div>
                
                {/* Dynamic Content */}
                <div className="p-4">
                    {renderContent()}
                </div>
                
                {/* Footer */}
                <footer className="bg-purple-900 text-white p-4">
                    {/* Footer content here */}
                </footer>
            </div>
        </div>
    );
};

export default DashboardLayout;
