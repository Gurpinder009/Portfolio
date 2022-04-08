import React from 'react'
import { Route, Routes as DOMRouter } from 'react-router-dom'
import About from './Pages/About/About'
import ContactMe from './Pages/ContactMe/ContactMe'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'

export default function Router() {
  return (
    <DOMRouter>
      <Route path='/' element={<Home/>} />
      <Route path='/contact-me' element={<ContactMe/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path="*" element={<PageNotFound/>}/>
    </DOMRouter>
  )
}


function PageNotFound(){
  return <div>this is not working fine </div>
}


