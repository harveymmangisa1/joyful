import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import './App.css'; // For global styles
import Hero from './Hero'; // Import the Hero component
import Cta from './Cta'; // Import the Call to Action component
import Mission from './Mission'; // Import the Mission component
import Values from './Values'; // Import the Values component
import Contact from './Contact'; // Import the Contact component
import Donate from './Donate'; // Import the Donate component
import Collage from './Collage'; // Import the Collage component
import Footer from './Footer'; // Import the Footer component
import Checkout from './Checkout'; // Import the Checkout component
import About from './About'; // Import the About component
import Stories from './Stories'; // Import the Stories component
import Team from './Team'; // Import the Team component

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero /> {/* Main Hero Page */}
              <Cta />  {/* Call to Action section */}
              <Mission /> {/* Other sections */}
              <Values />
              <Contact />
              <Footer/>
            </>
          } 
        />
        <Route 
          path="/donate" 
          element={
            <>
              <Hero /> {/* Hero for the Donate Page */}
              <Collage /> {/* Collage of pictures */}
              <Donate /> {/* Donate Page */}  
              <Footer /> {/* Footer */}
            </>
          } 
        /> {/* Donate Page */}
        <Route 
          path="/checkout" 
          element={
            <>
              <Hero /> {/* Hero for the Checkout Page */}
              <Collage /> {/* Collage of pictures */}
              <Checkout /> {/* Checkout Component */}
              <Footer /> {/* Footer */}
            </>
          } 
        /> {/* Checkout Page */}
        <Route 
          path="/about" 
          element={
            <>
              <Hero /> {/* Hero for the About Page */}
              <About /> {/* About Component */}
              <Footer /> {/* Footer */}
            </>
          } 
        /> {/* About Page */}
        <Route 
          path="/stories" 
          element={
            <>
              <Hero /> {/* Hero for the Stories Page */}
              <Stories /> {/* Stories Component */}
              <Footer /> {/* Footer */}
            </>
          } 
        /> {/* Stories Page */}
        <Route 
          path="/team" 
          element={
            <>
              <Hero /> {/* Hero for the Team Page */}
              <Team /> {/* Team Component */}
              <Footer /> {/* Footer */}
            </>
          } 
        /> {/* Team Page */}
      </Routes>
    </div>
  );
}

export default App;
