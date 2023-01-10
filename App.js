import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Book from './components/Book'
import Home from './components/Img'
import AbhinavAnand from './DoctorsList/AbhinavAnand'
import Aashna from './DoctorsList/Aashna'
import Avnish from './DoctorsList/Avnish'
import Ankit from './DoctorsList/Ankit'
import Ashish from './DoctorsList/Ashish'

export default function App() {
  return (
    <div>
    <Router>

    <Navbar/>
   
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route  path='book' element={<Book/>}/>
      <Route  path='book/abhinav' element={<AbhinavAnand/>}/>
      <Route  path='book/Aashna' element={<Aashna/>}/>
      <Route  path='book/Avnish' element={<Avnish/>}/>
      <Route  path='book/Ankit' element={<Ankit/>}/>
      <Route  path='book/Ashish' element={<Ashish/>}/>
    </Routes>

    </Router>
     
    </div>
  )
}

