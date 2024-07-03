import './App.css'
import './components/Navbar.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'

function App() {
  return (
    <>
      <div className='top_center'>
        <BrowserRouter>
            <Navbar />
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/edit/:id" element={<Update/>} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  )
}

export default App
