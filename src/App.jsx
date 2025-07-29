import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contacts from './components/contacts/Contacts';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
   <div>
  <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
  <main className="main-content">
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Contacts />
  </main>
</div>
  );
};

export default App;
