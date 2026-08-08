import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './ReactRouterDom/Home';
import About from './ReactRouterDom/About';
function App() {

  return (
    <div>
       <h2>App</h2>
       <BrowserRouter>
          <Routes>
               <Route path='/home' element={<Home />} />
               <Route path='/about' element={<About />} />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
