/**
 * StAuth10244: I Nguyen Duc Long, 000837437 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 * @returns 
 */
/**
 * @date April 03, 2022
 * @author DUC LONG NGUYEN (Paul)
 * @returns 
 */

// Starter code for the front-end, includes examples of accessing all server 
// API routes with AJAX requests.
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from './components/Routers';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// Material UI is included in the install of the front end, so we have access
// to components like Buttons, etc, when we import them.
function App() {
    return (
      <div>
          {
            <div className="App">
              <Router>
                <header className="App-header">
                  <Navigation/> {/**Use Navigation to route for links */}
                </header>
                <main className='mt-5 pt-5'>
                  <Routers/>    {/**Use React Router*/}
                </main>
                <Footer/>       {/**Footer */}
              </Router>
            </div>
          }
      </div> 
    );
}

export default App;
