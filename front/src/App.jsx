import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Blogs from './components/Blogs.jsx';
import SocialLinks from './components/SocialLinks.jsx';

function App() {
  return (
    <>
    <Router>
      <div>
        <h1>My Portfolio</h1>
        <Routes>
          <Route path="/" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/social" element={<SocialLinks/>} />
        </Routes>
      </div>
    </Router></>
  );
}

export default App;