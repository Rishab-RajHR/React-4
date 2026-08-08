import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './ReactRouterDom/Home';
import About from './ReactRouterDom/About';
import Navbar from './ReactRouterDom/Navbar';
import Employee from './ReactRouterDom/Employee';
import Contact from './ReactRouterDom/Contact';

import './App.css';

function App() {

  return (
    <div>
       <h2>App</h2>
       <BrowserRouter>
         <Navbar />
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />}/>
               <Route path='/employee/:name/:age' element={<Employee />}/>
               {/* <Route path='/*' element={<PageNotFound />} /> */}
               <Route path='/*' element={<Navigate to='/' />} /> 
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
