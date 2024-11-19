import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Reminder from './Pages/Reminder'
import Archeive from './Pages/Archeive'
import Bin from './Pages/Bin'



function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/reminder' element={<Reminder></Reminder>}></Route>
      <Route path='/archive'element={<Archeive></Archeive>}></Route>
      <Route path='/bin'element={<Bin></Bin>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App