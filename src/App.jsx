import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Content from './pages/Content'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
       <li><Link to="/about">About</Link></li>
        <li><Link to="/content">Content</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li>Hello</li>
      </ul>
    </nav>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/content' element={<Content/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
