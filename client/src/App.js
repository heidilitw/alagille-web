import React from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProjectDescription from './ProjectDescription';
import References from './References';
import Footer from './Footer';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Screening for Alagille Syndrome by facial image analysis with artificial intelligence</h1>
          </header>


          <main>
              <ProjectDescription/>
              <AboutUs/>
              <References/>
          </main>


      </div>
  );
}

export default App;