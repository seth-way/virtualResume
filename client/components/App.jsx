import React, { useState } from 'react';
import { Router } from '@reach/router';
import NavBar from './NavBar';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import Header from './Header';
import Footer from './Footer';
import Edu from './Edu';

const App = () => {
  const [sections] = useState(['projects', 'skills', 'education', 'resume']);
  return (
    <>
      <div id="appConatiner">
        <div id="headerContainer">
          <Header />
        </div>
        <NavBar sections={sections} />
        <Router>
          <Home path="/" />
          <Edu path="education" />
          <Projects path="projects" />
          <Resume path="resume" />
        </Router>
        <div className="clearFooter" />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
